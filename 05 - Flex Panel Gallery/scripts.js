const panel = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}
function toggleOpenDone(e){
    // if(this.classList.contains('open')){
    //     this.classList.add('open-done');
    // }else{
    //     this.classList.remove('open-done');
    // }
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-done');
    }
}

panel.forEach(panel => panel.addEventListener('click', toggleOpen));
panel.forEach(panel => panel.addEventListener('transitionend', toggleOpenDone));
