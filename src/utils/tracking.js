import moment from "moment";
import api from '../apis/ascusapi';
import _ from 'lodash';

export const handleTracking = (history) => {
    let customerRequest = window.localStorage.getItem("customerRequest");
    let postData = {
        url_link: window.location.href,
        pathname: history.pathname,
        params: history.search,
        total: 0,
        date_start: moment().format('YYYY-MM-DD HH:mm:ss'),
        date_end: moment().format('YYYY-MM-DD HH:mm:ss')
    };
    if (customerRequest) { // tồn tại link
        let datas = JSON.parse(customerRequest);

        if (datas.filter(item => {
            return moment(
                moment(item.date_start)
                    .format('YYYY-MM-DD')
            ).isBefore(moment()
                .format('YYYY-MM-DD'))
        }).length) { // trường hợp qua ngày reset lại
            api.post('/tracking-store/update', { list_history: datas });

            api.post('/tracking-store/create', { ...postData, total: 1 });
            localStorage.setItem(
                "customerRequest",
                JSON.stringify([postData])
            );

        } else {
            let totalLink = _.sumBy(datas, (t) => parseInt(t.total)); // tổng số total
            if (datas.filter(
                item => item.pathname === history.pathname
                    && item.params === history.search
            ).length) { // current link
                let newData = datas.map((item) => {
                    return {
                        ...item,
                        total: item.pathname === history.pathname
                            && item.params === history.search
                            ? item.total + 1
                            : item.total,

                        date_end: item.pathname === history.pathname
                            && item.params === history.search
                            ? moment().format('YYYY-MM-DD HH:mm:ss')
                            : item.date_end
                    }
                });
                localStorage.setItem(
                    "customerRequest",
                    JSON.stringify(newData)
                );

                if (totalLink >= 10) {
                    api.post('/tracking-store/update', { list_history: newData });

                    localStorage.setItem(
                        "customerRequest",
                        JSON.stringify(newData.map(item => {
                            return { ...item, total: 0 }
                        }))
                    );
                }

            } else {
                api.post('/tracking-store/create', postData);

                localStorage.setItem(
                    "customerRequest",
                    JSON.stringify(datas.concat(postData))
                );
            }
        }
    } else {
        api.post('/tracking-store/create', { ...postData, total: 1 });
        localStorage.setItem(
            "customerRequest",
            JSON.stringify([postData])
        );
    }
}