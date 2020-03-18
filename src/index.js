module.exports = function reverse (n) {
    let mod = Math.abs(n);
    let str = String(mod);
    let rev = str.split('').reverse().join('');
    let res = Number(rev);
    return (res); 
};
