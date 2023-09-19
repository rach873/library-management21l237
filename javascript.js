function Hanoi(n, from, to , via)
{
  if (n==0) return;

  Hanoi(n-1, from, via , to);

  moveDisk(from,to);

  // callStack.push([from,to]); // save parameters to callStack array
  
  Hanoi(n-1, via, to , from);
}
window.alert(5,6,8,7);