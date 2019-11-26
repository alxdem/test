const a = 'aaabbcaa';
const b = 'abcaavvvvv';

function count(data) {
  let result = '';
  let letter = '';
  let count = 1;
  console.log(data);
  for(let i = 0; i < data.length; i++) {

    if(letter && letter === data[i]) {
      count++;

    } else {
      result += (i > 0) ? data[i - 1] + count : '';
      count = 1;
      letter = data[i];
    }

    if(i === data.length - 1) {
      result += data[i] + count;
    }

  }

  console.log(result);
}

count(a);
count(b);