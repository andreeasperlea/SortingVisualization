

let values = [];

let i = 0;
let j = 0;
const blockWidth=10;
function setup() {
  let c = createCanvas(500, 200);
  let w=width/blockWidth;
  c.parent("myp5container");
  values = new Array(w);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    
  }
}

function draw() {
  background(0);

  
  if (i < values.length) {
    if (j < values.length - i - 1) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
      }
      j++;
    } else {
      j = 0; 
      i++;
    }
  } else {
    console.log("finished");
    noLoop();
  }

  for(let k=0;k<values.length;k++){
     if(k>=values.length-i){
        fill(0,255,0);
    }
    else if(k==j){
        fill(255,0,0);
    }
    else{
        fill(0);                                                                                                        
    }

    stroke(255);
    rect(k*blockWidth+1,0,blockWidth,height-values[k]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}