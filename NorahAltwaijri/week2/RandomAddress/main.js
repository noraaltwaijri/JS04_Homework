let street_number = ['1','2','3','4','5','6','7','8','9','10']
let street_name =['Elm Avenue','Coastline Street','Storm Avenue','Long Passage','Granite Way','Orchard Lane','Garden Avenue','Providence Street','Champion Boulevard','Apollo Lane']
let city_name = ['Kamar-Taj','Star City','Riverdale','Rajnagar','Basin City','District X','Duckburg','Blüdhaven','Metropolis','Gotham City']
let state_name = ['Alabama','Arizona','Arkansas','Colorado','Connecticut','Delaware','Idaho','Montana','Michigan','Illinois']
let zip_code = ['111','222','333','444','555','666','777','888','999','100']

console.log('randomly generated address: ' + street_number[Math.floor(Math.random()*10)] + ' ' +  street_name[Math.floor(Math.random()*10)]+ ' ' +   city_name[Math.floor(Math.random()*10)]+ ' ' +   state_name[Math.floor(Math.random()*10)] + ' ' + zip_code[Math.floor(Math.random()*10)])