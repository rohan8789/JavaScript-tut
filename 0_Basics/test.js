function x() {
  let a = 10;
  function y() {
    let b = 20;
    function z() {
        let m=1000;
      console.log(a,b,m);
    }
    z();
  }
  y();
}
x();
