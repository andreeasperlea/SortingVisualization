let values;
let i = 0;
let j = 0;
const blockWidth = 20;

function setup() {
  let c = createCanvas(500, 200);
  let w = Math.floor(width / blockWidth);
  c.parent("myp5container2");
  values = new Array(w);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }
  frameRate(5);
  quickSort(values,0,values.length-1);
}

async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index= await partition(arr,start,end);
  
  await Promise.all([quickSort(arr,start, index-1),
                     quickSort(arr,index+1,end)]);
}
async function partition(arr,start,end){
    let pivotIndex=start;
    let pivotValue=arr[end];
    for(let i=start;i<end;i++){
        if(arr[i]<pivotValue){
            await swap(arr,i,pivotIndex);
            pivotIndex++;
        }
    }
    await swap(arr,pivotIndex,end);
    return pivotIndex;
}
function draw() {
  background(0);
  for (let i = 0; i < values.length; i++) {
    stroke(255);
    fill(255);
    rect(i * blockWidth + 1, 0, blockWidth, height - values[i]);
  }
}

async function swap(arr, i, j) {
  await sleep(15);
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function sleep(ms){
  return new Promise(resolve=> setTimeout(resolve,ms));
}