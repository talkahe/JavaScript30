// ELements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

let mousedown = false;

// Functions
function togglePlay(){
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}
function updateButton(){
	toggle.textContent = this.paused ? '❚❚' : '►';
}
function skip(){
	video.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeUpdate(){
	video[this.name] = this.value;
}
function handleProgress(){
	const percent = (100 / video.duration) * video.currentTime;
	progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e){
	// const scrubTime = (progress.offsetWidth / video.duration) * e.offsetX;
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

// Events
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousemove', () => mousedown && handleProgress());
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
