window.addEventListener("load", ()=>{
    upInput = document.querySelector('#file_upload');
    fileWrap = document.querySelector('#filewrapper');

    upInput.addEventListener("change", (e)=>{
        let fileName = e.target.files[0].name;
        // let fileName = e.target.files[0].name.slice(0, 10) + '...';
        let fileType = e.target.value.split('.').pop();
        fileShow(fileName, fileType)
        console.log(fileName)
    })
    
    const fileShow = (fileName, fileType)=>{
        const showFileElem = document.createElement('div');
            showFileElem.classList.add('showFile');
        const leftbox = document.createElement('div');
        leftbox.classList.add('left');
            showFileElem.append(leftbox);
        const fileTypeName = document.createElement('span');
            fileTypeName.classList.add('fileType');
            fileTypeName.innerHTML = fileType;
            leftbox.append(fileTypeName);
        const textElementName = document.createElement('h3');
            leftbox.append(textElementName)
        const rightBox = document.createElement('div');
            rightBox.classList.add('right')
            showFileElem.append(rightBox)
            textElementName.innerHTML += `<abbr title="${fileName}">${fileName.slice(0, 30) + '...'}</abbr> `;
        const crossElem = document.createElement('span');
            crossElem.innerHTML = '&#215;'
            rightBox.append(crossElem);
            fileWrap.append(showFileElem);
        
        rightBox.addEventListener('click', ()=>{
            fileWrap.removeChild(showFileElem)
        })
    }


})