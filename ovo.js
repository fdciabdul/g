const OVOID =  require('ovoid');


async function getTransactionHistory() {
    let ovoid =  new  OVOID();
let refId =  await ovoid.login2FA('089614737919');

console.log(refId);
}

getTransactionHistory();