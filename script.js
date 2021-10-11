let url = location.href;
let result = url.includes('AN1VRQENFRJN5');

if (result == false) {
    location.replace(location.href + "&emi=AN1VRQENFRJN5");
}