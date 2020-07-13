//Buffer is the binary data packets, they are defined in node as working with binary is faster and we
//can encode binary in any format we like.
//Buffer can be created using new Buffer by three methods.
//1. by byte length
let a = Buffer.alloc(10);  //where 10 here refers to 10 bytes.
console.log(a);

//2. by array of bytes
let b = Buffer.from([233, 10, 167]);
console.log(b);

//3. by string
//a. Using utf8 encoding
let c = Buffer.from("Yo", "utf8");
console.log(c);
//b. Using ASCII encoding
let d = Buffer.from("whatsapp", "ascii");
console.log(d);
console.log(d.toString('hex'));   //Encoding buffer to string

//Buffer writing: On adding new data to buffer, the old data get rewrite first and then new data
//adds to buffer, if buffer don't have enough memory to store whole data then it truncates the new data
//to fill the total memory.
//Note: Buffer has fixed size, if you want to store data having size more than the buffer data then
//you have to make large buffer and then transfer the whole data to it.

//write to a buffer and return bytes written to the buffer
console.log(d.write("is lit"));
console.log(d);

//when writing utf-8, Buffer.write() method truncate the character string with a null character 0x00,
//This is much more significant while writing to the middle of a larger buffer 
//Ex-write to a buffer at specified byte.
let e = Buffer.alloc(5);
e.write('fffff');
console.log(e);
e.write('ab',1, 'utf8')
console.log(e);