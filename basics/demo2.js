/**
 * Observable生成方式有20来中
 * 常见的有create from fromEvent interval of empty never...
 * --a---b-c---d---X---|->

  a, b, c, d are emitted values
  X is an error
  | is the 'completed' signal
  ---> is the timeline
 */
// Rx.Observable.ajax.get(url)
// .subscribe(
//   v => { console.log( v) },
//   e => { console.log( e ) },
//   () => { console.log('complete') }
// );
Rx.Observable.from([1, 2, 3, 4])
.subscribe(
  v => { console.log( v) },
  e => { console.log( e ) },
  () => { console.log('complete') }
);
console.log('====================');
Rx.Observable.of(1, 2, 3, 4)
.subscribe(
  v => { console.log( v) },
  e => { console.log( e ) },
  () => { console.log('complete') }
);
// console.log('====================');
// Rx.Observable.interval(1000)
// .map(v => v)
// .filter(v => true)
// .subscribe(
//   v => { console.log( v) },
//   e => { console.log( e ) },
//   () => { console.log('complete') }
// );
console.log('====================');
Rx.Observable.empty()
.subscribe(
  v => { console.log( v) },
  e => { console.log( e ) },
  () => { console.log('complete') }
);
console.log('====================');
Rx.Observable.never()
.subscribe(
  v => { console.log( v) },
  e => { console.log( e ) },
  () => { console.log('complete') }
);
console.log('====================');
Rx.Observable.fromEvent(btn, 'click')
.subscribe(
  v => { console.log( v) },
  e => { console.log( e ) },
  () => { console.log('complete') }
);
console.log('====================');
const mPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100)
  }, 2000)
})
Rx.Observable.fromPromise(mPromise)
.subscribe(
  v => { console.log( v) },
  e => { console.log( e ) },
  () => { console.log('complete') }
);
console.log('====================');
const hello = (message, callback) => callback(`Hello ${message}`);
const sayHello = Rx.Observable.bindCallback(hello);
const source = sayHello(`World`);

source.subscribe(result => console.log(result));