let wrapper = document.querySelector('.wrapper');
let photo1 = document.querySelector('.photo1');
let photo2 = document.querySelector('.photo2');
let photo3 = document.querySelector('.photo3');
let darkBlock = document.createElement('div');
let pictureBlock = document.createElement('div');
let pictureBlock2 = document.createElement('div');
let pictureBlock3 = document.createElement('div');

darkBlock.classList.add('darkBlock');
pictureBlock.classList.add('pictureBlock1');
pictureBlock2.classList.add('pictureBlock2');
pictureBlock3.classList.add('pictureBlock3');
let schet1 = 0;
let schet2 = 0;
let schet3 = 0;

let removing1 = (event) => {
    darkBlock.style.display = 'none';
}

let funcOfScaling1 = (event) => {
    if(schet1 == 0){
    wrapper.append(darkBlock);
    darkBlock.append(pictureBlock);
    pictureBlock.style.display = 'block';
    pictureBlock2.style.display = 'none';
    pictureBlock3.style.display = 'none';
    }
    else{
        darkBlock.style.display = 'flex';
        pictureBlock.style.display = 'block';
        pictureBlock2.style.display = 'none';
        pictureBlock3.style.display = 'none';
    }
    darkBlock.addEventListener('click', removing1);
    schet1++;
}
let funcOfScaling2 = (event) => {
    if(schet2 == 0){
        wrapper.append(darkBlock);
        darkBlock.append(pictureBlock2);
        pictureBlock2.style.display = 'block';
        pictureBlock.style.display = 'none';
        pictureBlock3.style.display = 'none';
        }
        else{        
            pictureBlock2.style.display = 'block';
        pictureBlock.style.display = 'none';
        pictureBlock3.style.display = 'none';
            darkBlock.style.display = 'flex';
        }
    darkBlock.addEventListener('click', removing1);
    schet2++;
}
let funcOfScaling3 = (event) => {
    if(schet3 == 0){
        wrapper.append(darkBlock);
        darkBlock.append(pictureBlock3);
        pictureBlock3.style.display = 'block';
        pictureBlock2.style.display = 'none';
        pictureBlock.style.display = 'none';
        }
        else{
            pictureBlock3.style.display = 'block';
            pictureBlock2.style.display = 'none';
            pictureBlock.style.display = 'none';
            darkBlock.style.display = 'flex';
        }
    darkBlock.addEventListener('click', removing1);

        schet3++;
}

photo1.addEventListener('click', funcOfScaling1);
photo2.addEventListener('click', funcOfScaling2);
photo3.addEventListener('click', funcOfScaling3);

