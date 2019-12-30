var modal = document.getElementById('modal');
var modalImage = document.getElementById('modalImage');
var myImage = document.getElementsByClassName('img01');
var closer = document.getElementById('closer');
var fon = document.getElementsByClassName('fon')[0];
var video = document.getElementsByClassName('video')[0];
var vid = document.getElementsByTagName("video")[0];
var x;

myImage[0].onclick = function() {
  modal.style.display = 'block';
  modalImage.src = this.src;
  x=1;
}

myImage[1].onclick = function() {
  modal.style.display = 'block';
  modalImage.src = this.src;
  x=2;
}

myImage[2].onclick = function() {
  modal.style.display = 'block';
  modalImage.src = this.src;
  x=3;
}

myImage[3].onclick = function() {
  modal.style.display = 'block';
  modalImage.src = this.src;
  x=4;
}

myImage[4].onclick = function() {
  modal.style.display = 'block';
  modalImage.src = this.src;
  x=5;
}

myImage[5].onclick = function() {
  modal.style.display = 'block';
  modalImage.src = this.src;
  x=6;
}

myImage[6].onclick = function() {
  modal.style.display = 'block';
  modalImage.src = this.src;
  x=7;
}

myImage[7].onclick = function() {
  modal.style.display = 'block';
  modalImage.src = this.src;
  x=8;
}

myImage[8].onclick = function() {
  modal.style.display = 'block';
  modalImage.src = this.src;
  x=9;
}

myImage[9].onclick = function() {
  modal.style.display = 'block';
  modalImage.src = this.src;
  x=10;
}

myImage[10].onclick = function() {
  modal.style.display = 'block';
  modalImage.src = this.src;
  x=11;
}

myImage[11].onclick = function() {
  modal.style.display = 'block';
  modalImage.src = this.src;
  x=12;
}

closer.onclick = function () {
  modal.style.display = 'none';
  fon.style.display = "flex";
  modalImage.style.display = "block";
  video.style.display = "none";
  vid.src = "";
}


fon.onclick = function () {
  fon.style.display = "none";
  modalImage.style.display = "none";
  video.style.display = "block";
  switch(x) {
    case 1: vid.src = "video/1.mp4"; break;
    case 2: vid.src = "video/2.mp4"; break;
    case 3: vid.src = "video/3.mp4"; break;
    case 4: vid.src = "video/4.mp4"; break;
    case 5: vid.src = "video/5.mp4"; break;
    case 6: vid.src = "video/6.mp4"; break;
    case 7: vid.src = "video/7.mp4"; break;
    case 8: vid.src = "video/8.mp4"; break;
    case 9: vid.src = "video/9.mp4"; break;
    case 10: vid.src = "video/10.mp4"; break;
    case 11: vid.src = "video/11.mp4"; break;
    case 12: vid.src = "video/12.mp4"; break;
    case 13: vid.src = "video/13.mp4"; break;
  }

}
