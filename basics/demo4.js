/**
 * 模拟100ms点击一次
 * ---c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c----
 * 
 *  vvvvvvvv buffer vvvvvvvv
 * 
 * ---c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c-c----
 *  vvvvvvv  throttleTime(500) vvvvvvv
 * ---c- - - - -c- - - - -c- - - - -c- - - - -c- - ----  
 * 
 * ---b- - - - -b- - - - -b- - - - -b- - - - -b---
 *    \         \       \            \         \
 *    []  [c,c,c,c,c] [c,c,c,c,c] [c,c,c,c,c]  [c,c,c,c,c]
 * 
 */
Rx.Observable.fromEvent(btn, 'click')
.buffer(Rx.Observable.fromEvent(btn, 'click').throttleTime(500))
.subscribe(
  v => { console.log(v) },
  e => { console.log(e) },
  () => { console.log('complete') }
);

// Rx.Observable.fromEvent(btn, 'click')
// .mapTo(1)
// .scan((x, y) => x + y, 0)
// .subscribe(
//   v => { console.log(v) },
//   e => { console.log(e) },
//   () => { console.log('complete') }
// );

/**
 * -0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19|
 *  vvvvvvvvvvvvvv  throttleTime(500) vvvvvvvvvvvv
 * -0- - - - -5- - - - -10-  -  -  -  -15-  -  -  -  |
 */
// Rx.Observable.interval(100)
// .take(20)
// .throttleTime(500)
// .subscribe(
//   v => { console.log(v) },
//   e => { console.log(e) },
//   () => { console.log('complete') }
// );

/**
 * source : ---0---1---2---3---4---5---6---7..
   source2: --- --- ---0--- --- ---1...
            buffer(source2)
  example: ---------([0,1])---------([2,3,4])
 */

// var source = Rx.Observable.interval(300);
// var source2 = Rx.Observable.interval(900);
// var example = source.buffer(source2);

// example.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });

// var source = Rx.Observable.interval(300).take(5);
// var example = source.throttleTime(1000);

// example.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });
