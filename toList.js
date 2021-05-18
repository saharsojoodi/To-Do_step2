var item;
function todo() {
      item = document.getElementById('input').value;
  var li = document.createElement('li');
  var t = document.createTextNode(item);
  li.appendChild(t);
  if (item === '') {
    alert("Please write something!");
  } else {
    document.getElementById('list').appendChild(li);
  }
  document.getElementById('input').value = "";
  
  }
  