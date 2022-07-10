// Trong trường hợp này, nếu n=mà ko set time out thì tất nhiên là thỏ nhanh hơn
// Tuy nhiên, nếu set timeout thì rùa là người nhanh hơn
// => Cần 1 cái gì đó để chờ thỏ chạy xong thì thì rùa mới chạy

setTimeout(()=>console.log("🐇 finishes!"), 1000);
console.log("🐢 finishes!");