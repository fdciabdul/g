const axios = require('axios');
let token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJhdWQiOlsiZ29qZWs6Y29uc3VtZXI6YXBwIl0sImRhdCI6eyJhY3RpdmUiOiJ0cnVlIiwiYmxhY2tsaXN0ZWQiOiJmYWxzZSIsImNvdW50cnlfY29kZSI6Iis2MiIsImNyZWF0ZWRfYXQiOiIyMDE4LTExLTI1VDExOjQxOjAwWiIsImVtYWlsIjoiYWJkdWxtdXR0YXFpbjQ1NkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJnb3BheV9hY2NvdW50X2lkIjoiMDEtMTBmNGFjYjM2MzZlNGIwYWJkNzU0NzAyNTk1Yzg1MTQtMjQiLCJuYW1lIjoiQWJkdWwgTXV0dGFxaW4iLCJudW1iZXIiOiI4OTYxNDczNzkxOSIsInBob25lIjoiKzYyODk2MTQ3Mzc5MTkiLCJzaWduZWRfdXBfY291bnRyeSI6IklEIiwid2FsbGV0X2lkIjoiMTgzMjkwNzAxMTQ1ODAzMzIyIn0sImV4cCI6MTY1ODA3NjAyNywiaWF0IjoxNjU1MzIxODIyLCJpc3MiOiJnb2lkIiwianRpIjoiYzFiZDhiMjAtOWY5ZC00ZWY3LWI1MzAtM2ViMmRiNzM5NjI3Iiwic2NvcGVzIjpbXSwic2lkIjoiM2Q5NjExNmUtNGE4Yi00OGUzLTllZGQtYmUwOWJkY2I3ODk3Iiwic3ViIjoiOTQ4NmVkZjQtYmE2Ni00NGQ3LTliODctMzJiNjlhZTMwYjg1IiwidWlkIjoiNjExMjMzOTExIiwidXR5cGUiOiJjdXN0b21lciJ9.bvcelhP0eBx3XxZb4PqhsA0DLepTNiezkZAnP60ddGOoGdlNdHUKAvBp5cODwWMFkiyI-pjS1xL8C-HT_Pu1ZF0Z1xUskrAslbQMtzTyQoim6VOQ5HQgDWecyBejRK_Y9-E6o-YfwCcO8zk4AP53f8iQXnJMT8ui8Edfc3F9x14";
const {
    URL_CUSTOMER
} = require('./utils/config');
module.exports = {
    header: function () {
        return {
            headers: {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "max-age=0",
                "content-type": "application/json",
                "X-Session-Id": "eaf2019d-7116-4513-8411-aff601a3f134",
                "X-Appid": " com.gojek.app",
                "X-Platform": "Android",
                "X-Uniqueid": "aeaac13894c0feaf",
                "X-Deviceos": "Android,7.1.2",
                "X-User-Type": "customer",
                "X-Phonemake": "samsung",
                "X-Phonemodel": "samsung,SM-N976N",
                "Authorization": `Bearer ${token}`,
                "X-User-Locale": "en_ID",
                "Gojek-Country-Code": " ID",
                "X-Appversion": "4.45.1",
                "Connection": "close",
                "User-Agent": "okhttp/3.12.13"
            }
        }
    },
    listCodeBanks: async () => {
        const response = await axios.get(`${URL_CUSTOMER}/banks?type=transfer&show_withdrawal_block_status=true`,
            this.header());
        return response.data;
    },
    getBalance: async () => {
        const response = await axios.get(`${URL_CUSTOMER}/payment-options/balances`,
            this.header());
        return response.data;

    },

    getTransactionHistory: async (page = 1, limit = 50) => {
        const response = await axios.get(`${URL_CUSTOMER}/users/transaction-history?page=${page}&limit=${limit}`,
            this.header());
        return response.data;
    },
    getOrderHistory: async () => {
        const response = await axios.get(`${URL_CUSTOMER}/users/orders`,
            this.header());
        return response.data;
    }

} 