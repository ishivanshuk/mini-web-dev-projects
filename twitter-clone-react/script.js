var data;
let max;
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    data = await response.json();
    console.log(data.data);
    max=data.data.length/pagelength;
    show(data.data, 0,5);
}


getapi('https://inshorts.deta.dev/news?category=all');


let pagenum=0;
let pagelength=5;


function next_page()
{
    if(pagenum<max-1)
    {
        pagenum++;
    }
    if(pagenum==0)
    {
        document.getElementById('prevbt').className='prevdisabled';
    }
    else{
        document.getElementById('prevbt').className='prev';
    }
    if(pagenum==max-1)
    {
        document.getElementById('nextbt').className='nextdisabled';
    }
    else{
        document.getElementById('nextbt').className='next';
    }
    console.log(pagenum);
    show(data.data, pagenum, pagelength);
}

function prev_page()
{
    if(pagenum>0)
    {
        pagenum--;
    }
    if(pagenum==max-1)
    {
        document.getElementById('nextbt').className='nextdisabled';
    }
    else{
        document.getElementById('nextbt').className='next';
    }
    if(pagenum==0)
    {
        document.getElementById('prevbt').className='prevdisabled';
    }
    else{
        document.getElementById('prevbt').className='prev';
    }
    console.log(pagenum);
    show(data.data, pagenum, pagelength);
}

function show(data, pagenum, pagelength) {
    console.log(data.length);
    const x=document.getElementsByClassName("post");
    x[0].innerHTML='';
    // Loop to access all rows 
    for (i=pagenum*pagelength;i<pagenum*pagelength+pagelength;i++) {
      
      x[0].innerHTML += ` 
      
      <div class="post_avatar" >
      <img
        src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
        alt=""
      />
    </div>

    <div class="post_body">
      <div class="post_header">
        <div class="post_headerText">
          <h3>
            ${data[i].author}
            <span class="post_headerSpecial"
              ><span class="material-icons post_badge"> verified </span>@${data[i].author}</span
            >
          </h3>
        </div>
        <div class="post_headerDescription">
          <p>${data[i].content}</p>
        </div>
      </div>
      <img
        src=${data[i].imageUrl}
        alt=""
      />
      <div class="post_footer">
        <span class="material-icons"> repeat </span>
        <span class="material-icons"> favorite_border </span>
        <span class="material-icons"> publish </span>
      </div>
    </div> 
    `;
    }
 
    
}