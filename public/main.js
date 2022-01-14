

getCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
    }
    request.send()
}

getHtml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/1.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}

getJs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('我是2.js');
            } else {
                alert('2.js 加载失败')
            }
        }
    }
    request.send()
}

getXml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim());
            }else {
                alert('3.xml 加载失败')
            }
        }
    }
    request.send()
}

getJson.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response);
            const object = JSON.parse(request.response)// 把json 的字符串转换成 对应的 js对象
            myName.textContent = object.name
            console.log(object);
        }
    }
    request.send()
}
//分页
let n = 1
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}.json`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                console.log(request.response);
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    document.querySelector('#xxx').appendChild(li)
                });
                n += 1;
            }
        }
    }
    request.send()
}