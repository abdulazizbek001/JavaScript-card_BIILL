const elBody = document.querySelector('body');
const elBox = document.createElement('div');
const elSpan = document.createElement('div');
const elText = document.createElement('p');
const elSpan2 = document.createElement('div');

elBody.append(elBox);
elBox.append(elSpan);
elBox.append(elText);
elBox.append(elSpan2)


console.log(elBox, elSpan);

// ============================= BODY START ============================= //

elBody.style.display = 'flex';
elBody.style.alignItems = 'center';
elBody.style.justifyContent = 'center';
elBody.style.height = '100vh';

// ============================= BODY END ============================= //

// ============================= BOX START ============================= //

elBox.style.padding = '43px 36px 28px 37px';
elBox.style.backgroundColor = '#7900ff';
elBox.style.borderRadius = '5px';
elBox.style.boxShadow = 'grey 4px 1px 9px 0px';

// ============================= BOX END ============================= //

// ============================= SPAN START ============================= //

elSpan.style.margin = '0 auto';
elSpan.style.width = '30px';
elSpan.style.height = '30px';
elSpan.style.backgroundColor = 'white';
elSpan.style.transform = 'rotate(46deg)';

// ============================= SPAN END ============================= //

// ============================= TEXT START ============================= //

elText.textContent = 'The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.';
elText.style.color = 'white';
elText.style.width = '140px';
elText.style.textAlign = 'center';
elText.style.lineHeight = '20px'

// ============================= TEXT END ============================= //

// ============================= SPAN-2 START ============================= //

elSpan2.style.width = '30px';
elSpan2.style.height = '30px';
elSpan2.style.backgroundColor = 'white';
elSpan2.style.transform = 'rotate(46deg)';
elSpan2.style.margin = '0 auto';

// ============================= SPAN-2 END ============================= //