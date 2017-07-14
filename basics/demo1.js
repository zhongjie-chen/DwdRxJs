/**
 * rx概念等
 * (👨👩👫)|
 */
console.log('start');
const observable = Rx.Observable.create((subscriber) => {
  subscriber.next('👨');
  subscriber.next('👩');
  subscriber.next('👫');
  subscriber.complete();
  // throw new Error();
})

observable.subscribe(
  v => { console.log(v) },
  e => { console.log(e) },
  () => { console.log('complete') }
);
console.log('end');
/**
 * Rx最主要的概念就是Observable，可以看做一个序列sequences组合异步行为事件等。可以把RxJS 想成处理非同步行为的Lodash。
 * 设计模式观察者模式迭代器模式
 * 编程范式函数式跟响应式
 * http://reactivex.io/intro.html
 */

//   订阅一个Observable 就像是执行一个function
//   const subscribe = (subscriber) => {
//     subscriber.next('👨');
//     subscriber.next('👩');
//     subscriber.next('👫');
//     subscriber.complete();
//     // throw new Error();
//   }
//

// subscribe({
//   next: v => { console.log(v) },
//   error: e => { console.log(e) },
//   complete: () => { console.log('complete') }
// });