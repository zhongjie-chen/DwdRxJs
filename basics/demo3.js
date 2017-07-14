/**
 * Marble Diagrams
 * 转换observable 
 * 流的转换
 * 流转换类似对序列的一些操作 map filter concat reduce等
 * 在流中这些方法称为Operator
 */

/**
 * (12345)|
 *   map(v => v * 2)
 * (246810)|
 *   filter(v => v > 6)
 * (810)|
 */
// Rx.Observable.from([1, 2, 3, 4, 5])
// .map(v => v * 2)
// .filter(v => v > 6)
// .subscribe(
//   v => { console.log( v) },
//   e => { console.log( e ) },
//   () => { console.log('complete') }
// );
/**
 * '-' => 代表一段时间比如100ms
 * -----0-----1-----2-----3-----... 
 * 
 *      .map(v => v * 2)
 * 
 * -----0-----2-----4-----6-----... 
 */
// Rx.Observable.interval(5000)
// .map(v => v * 2)
// .subscribe(
//   v => { console.log( v) },
//   e => { console.log( e ) },
//   () => { console.log('complete') }
// );
/**
 * ----0----1----2----3----4----5----....
 * 
 *    take(5)
 * 
 * ----0----1----2----3----4|
 * 
 *    .map(v => Rx.Observable.of(1, 2, 3))
 * 
 * ----o----o----o----o----o|
 *     \     \    \   \    \
 *   (123)| (123)| ... ... ...
 * 
 *    .concatAll()
 * 
 *  ----(123)----(123)----(123)----(123)----(123)|
 */
// Rx.Observable.interval(400)
// .take(5)
// .map(v => Rx.Observable.of(1, 2, 3))
// .concatAll()
// .subscribe(
//   v => { console.log( v) },
//   e => { console.log( e ) },
//   () => { console.log('complete') }
// );
/**
 * 让promise可以取消
 * ---------r|
 * -----e----e------e
 * 
 *  takeUntil
 * 
 * -----|
 */
// const source = 
//   Rx.Observable
//   .from(fetch(URL).then(res => res.json()))
//   .takeUntil(Rx.Observable.fromEvent(cancelBtn, 'click'));
// setTimeout(() => {
//   source.subscribe(
//     v => { console.log( v) },
//     e => { console.log( e ) },
//     () => { console.log('complete') }
//   );
// }, 1000)
// source.subscribe(
//   v => { console.log( v) },
//   e => { console.log( e ) },
//   () => { console.log('complete') }
// );

/**
 * cancat merge switch
 * ---0---1---2---3|
 * (123)|
 *  concat
 * ---0---1---2---3(123)|
 * --0--1--3|
 *    map(x => x + 100))
 * --100--101--102|
 *  concat
 * ---0---1---2---3(123)--100--101--102|
 */
// Rx.Observable.interval(300).take(4)
//   .concat(Rx.Observable.of(1, 2, 3))
//   .concat(Rx.Observable.interval(200).take(3).map(x => x + 100))
//   .subscribe(
//     v => { console.log( v) },
//     e => { console.log( e ) },
//     () => { console.log('complete') }
//   );
// merge
// Rx.Observable.interval(300).take(4)
//   .merge(Rx.Observable.of(1, 2, 3))
//   .merge(Rx.Observable.interval(200).take(3).map(x => x + 100))
//   .subscribe(
//     v => { console.log( v) },
//     e => { console.log( e ) },
//     () => { console.log('complete') }
//   );
// switch
Rx.Observable.interval(300).take(4)
  .merge(Rx.Observable.of(1, 2, 3))
  .merge(Rx.Observable.interval(200).take(3).map(x => x + 100))
  .switch()
  .subscribe(
    v => { console.log( v) },
    e => { console.log( e ) },
    () => { console.log('complete') }
  );