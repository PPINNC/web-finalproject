let state_G=0, state_S=0, s_face=0, s_eye=0, s_nose=0, s_hair=0, s_ear=0, s_mouse=0, s_level=0, pt=0, timecontrol1=0, timecontrol2=0, timecontrol3=0, hp=300;
let A=new Array(7).fill(0), ax=new Array(7).fill(0), ay=new Array(7).fill(0), ar=new Array(7).fill(0), ad=new Array(7).fill(0);
let B=new Array(7).fill(0), bx=new Array(7).fill(0), by=new Array(7).fill(0), bh=new Array(7).fill(1);
let C=new Array(13).fill(0), cx=new Array(13).fill(0), cy=new Array(13).fill(0), ch=new Array(13).fill(1);
let D=new Array(20).fill(0), dx=new Array(20).fill(0), dy=new Array(20).fill(0), dh=new Array(20).fill(1);
let E=new Array(500).fill(0), ex=new Array(500).fill(0), ey=new Array(500).fill(0), eh=new Array(500).fill(1);
let Bullet1=new Array(10).fill(0), Bullet1x=new Array(10).fill(0), Bullet1y=new Array(10).fill(0);
let Bullet2=new Array(30).fill(0), Bullet2x=new Array(30).fill(0), Bullet2y=new Array(30).fill(0);
let Bullet3=new Array(50).fill(0), Bullet3x=new Array(50).fill(0), Bullet3y=new Array(50).fill(0), x3shift=new Array(50).fill(0);
let ac0=[191,200,215], ac1=[191,200,215], ac2=[226,210,210], ac3=[227,226,180], ac4=[162,181,159], ac5=[209,223,232], ac6=[222,179,207];
var button_START, slface, sleye, slnose, slear, slhair, slmouse, sllevel, sound0, sound2, sound3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  button_START=createButton("-Start-");
  sound0=loadSound("Goodbye.mp3");
  sound2=loadSound("もぺもぺ.mp3");
  sound3=loadSound("Grievous Lady.mp3");
}

function sou0(){
  if(!sound0.isPlaying()){
    sound0.play();
  }
}

function sou2(){
  if(state_G==2 && sllevel.value()<=2){
    if(!sound2.isPlaying()){
      sound2.loop();
    }
  }
}

function sou3(){
  if(state_G==2 && sllevel.value()>=3){
    if(!sound3.isPlaying()){
      sound3.loop();
    }
  }
}

function draw() {
  if(hp<=0){
    state_G=3;
    console.log("state3");
  }
  if(state_G==0){
    background('#ffffbb');
    button_START.html("-Start-");
    button_START.mousePressed(GS0);
    button_START.position(windowWidth/2-100, windowHeight/2);
    button_START.size(200);
    for(let i=0; i<7; i++){
      let tA=random(0, 20);
      if(tA<1 && A[i]==0){
        A[i]=1;
        ax[i]=random(0, windowWidth);
        ar[i]=random(0.5, 30);
        ad[i]=random(windowHeight/2.5, windowHeight);
      }
      if(A[i]==1){
        if(ay[i]<ad[i]){
          ay[i]+=4;
        }
        else{
          ar[i]+=8;
        }
        push();
        if(i==0){fill(ac0);}
        if(i==1){fill(ac1);}
        if(i==2){fill(ac2);}
        if(i==3){fill(ac3);}
        if(i==4){fill(ac4);}
        if(i==5){fill(ac5);}
        if(i==6){fill(ac6);}
        circle(ax[i], ay[i], ar[i]);
        pop();
      }
      if(ar[i]>300){
        A[i]=0;
        ay[i]=0;
      }
    }
  }
  else if(state_G==1){
    background('#cceeff');
    sou0();
    button_START.position(windowWidth/2-100, windowHeight/1.2);
    button_START.mousePressed(GS1);
    if(s_mouse==0){
      s_mouse=1;
      slmouse=createSlider(0.1, 10, 4, 0.05);
      slmouse.position(width*7/9, height/1.1-120);
      slmouse.size(120);
    }
    if(s_level==0){
      s_level=1;
      sllevel=createSlider(1, 5, 1, 1);
      sllevel.position(width*7/9, height/1.1-180);
      sllevel.size(120);
    }
    if(s_hair==0){
      s_hair=1;
      slhair=createSlider(1, 3, 1, 1);
      slhair.position(width*7/9, height/1.1-150);
      slhair.size(120);
    }
    if(s_eye==0){
      s_eye=1;
      sleye=createSlider(0.1, 10, 4, 0.05);
      sleye.position(width*7/9, height/1.1-90);
      sleye.size(120);
    }
    if(s_ear==0){
      s_ear=1;
      slear=createSlider(0.1, 10, 4, 0.05);
      slear.position(width*7/9, height/1.1-60);
      slear.size(120);
    }
    if(s_nose==0){
      s_nose=1;
      slnose=createSlider(0.1, 10, 4, 0.05);
      slnose.position(width*7/9, height/1.1-30);
      slnose.size(120);
    }
    if(s_face==0){
      s_face=1;
      slface=createSlider(0.1, 10, 4, 0.05);
      slface.position(width*7/9, height/1.1);
      slface.size(120);
    }
    push();
    text("face "+slface.value(), width*7/9+5, height/1.1);
    text("nose "+slnose.value(), width*7/9+5, height/1.1-30);
    text("ear "+slear.value(), width*7/9+5, height/1.1-60);
    text("eye "+sleye.value(), width*7/9+5, height/1.1-90);
    text("mouse "+slmouse.value(), width*7/9+5, height/1.1-120);
    text("hair type-"+slhair.value(), width*7/9+5, height/1.1-150);
    pop();
    if(sllevel.value()==1){
      text("Easy", width*7/9+5, height/1.1-180);
    }
    else if(sllevel.value()==2){
      text("Normal", width*7/9+5, height/1.1-180);
    }
    else if(sllevel.value()==3){
      text("Hard", width*7/9+5, height/1.1-180);
    }
    else if(sllevel.value()==4){
      text("Extra", width*7/9+5, height/1.1-180);
    }
    else{
      text("HELL...", width*7/9+5, height/1.1-180);
    }
  }
  else if(state_G==2){
    sound0.stop();
    sou2();
    sou3();
    background('#ccccff');
    button_START.position(windowWidth-100, 10);
    button_START.size(80);
    push();
    textSize(20);
    text("HP", windowWidth-270, windowHeight-25)
    fill('#ccccff');
    rect(windowWidth-230, windowHeight-40, 200, 15);
    fill('red');
    if(hp>0){
      rect(windowWidth-230, windowHeight-40, 200*hp/300, 15);
    }
    pop();
    if(keyIsDown(27) && state_S==1){
      state_S=0;
      button_START.html("-Play-");
    }
    if(keyIsDown(16) && state_S==0){
      state_S=1;
      button_START.html("-Stop-");
    }
    poi();
    bullet();
    timecontrol1++;
    if(timecontrol1==1000){
      timecontrol1=0;
    }
    timecontrol2++;
    if(timecontrol2==600){
      timecontrol2=0;
    }
    timecontrol3++;
    if(timecontrol3==750){
      timecontrol3=0;
    }
  }
  else{
    sound2.stop();
    sound3.stop();
    background('#ccccff');
    hp++;
    push();
    textSize(80);
    text("Score"+pt, windowWidth/2-200, windowHeight/2+20);
    pop();
    if(hp==300){
      state_G=0; state_S=0; s_face=0; s_eye=0; s_nose=0; s_hair=0; s_ear=0; s_mouse=0; s_level=0; pt=0; timecontrol1=0; timecontrol2=0; timecontrol3=0;
      A=new Array(7).fill(0); ax=new Array(7).fill(0); ay=new Array(7).fill(0); ar=new Array(7).fill(0); ad=new Array(7).fill(0);
      B=new Array(7).fill(0); bx=new Array(7).fill(0); by=new Array(7).fill(0); bh=new Array(7).fill(1);
      C=new Array(13).fill(0); cx=new Array(13).fill(0); cy=new Array(13).fill(0); ch=new Array(13).fill(1);
      D=new Array(20).fill(0); dx=new Array(20).fill(0); dy=new Array(20).fill(0); dh=new Array(20).fill(1);
      E=new Array(500).fill(0); ex=new Array(500).fill(0); ey=new Array(500).fill(0); eh=new Array(500).fill(1);
      Bullet1=new Array(10).fill(0); Bullet1x=new Array(10).fill(0); Bullet1y=new Array(10).fill(0);
      Bullet2=new Array(30).fill(0); Bullet2x=new Array(30).fill(0); Bullet2y=new Array(30).fill(0);
      Bullet3=new Array(50).fill(0); Bullet3x=new Array(50).fill(0); Bullet3y=new Array(50).fill(0); x3shift=new Array(50).fill(0);
    }
  }
  if(state_S==1 || state_G==1){
    hair();
    ear();
    face();
    eye();
    nose();
    mouse();
  }
}

function bullet(){
  if(slhair.value()==1){
    for(let i=0; i<10; i++){
      if(timecontrol1==100*i && Bullet1[i]==0 && state_S==1){
        Bullet1[i]=1;
        Bullet1x[i]=mouseX;
        Bullet1y[i]=mouseY-50;
      }
      if(Bullet1[i]==1){
        if(Bullet1y[i]>-40){
          if(state_S==1){
            Bullet1y[i]-=2;
          }
        }
        else{
          Bullet1[i]=0;
        }
        push();
        fill('yellow');
        circle(Bullet1x[i], Bullet1y[i], 30);
        pop();
      }
    }
  }
  else if(slhair.value()==2){
    for(let i=0; i<30; i++){
      if(timecontrol2==20*i && Bullet2[i]==0 && state_S==1){
        Bullet2[i]=1;
        Bullet2x[i]=mouseX;
        Bullet2y[i]=mouseY-50;
      }
      if(Bullet2[i]==1){
        if(Bullet2y[i]>-40){
          if(state_S==1){
            Bullet2y[i]-=4;
          }
        }
        else{
          Bullet2[i]=0;
        }
        push();
        fill('yellow');
        circle(Bullet2x[i]-9, Bullet2y[i], 15);
        circle(Bullet2x[i]+9, Bullet2y[i], 15);
        pop();
      }
    }
  }
  else{
    for(let i=0; i<50; i++){
      if(timecontrol3==15*i && Bullet3[i]==0 && state_S==1){
        Bullet3[i]=1;
        x3shift[i]=0;
        Bullet3x[i]=mouseX;
        Bullet3y[i]=mouseY-50;
      }
      if(Bullet3[i]==1){
        if(Bullet3y[i]>-40){
          if(state_S==1){
            Bullet3y[i]-=4;
            x3shift[i]++;
          }
        }
        else{
          Bullet3[i]=0;
        }
        push();
        fill('yellow');
        circle(Bullet3x[i], Bullet3y[i], 15);
        circle(Bullet3x[i]+x3shift[i], Bullet3y[i], 15);
        circle(Bullet3x[i]-x3shift[i], Bullet3y[i], 15);
        pop();
      }
    }
  }
}

function poi(){
  for(let i=0; i<7; i++){
      let tB=random(0, 20);
      push();
      textSize(40);
      text('score: ', 10, 40);
      text(pt, 130, 40);
      pop();
      if((bx[i]-mouseX)*(bx[i]-mouseX)+(by[i]-mouseY)*(by[i]-mouseY)<640 && state_S==1){
        pt-=bh[i];
        hp-=bh[i];
        B[i]=0;
        by[i]=-40;
        bh[i]=10;
      }
      if(slhair.value()==1){
        for(let j=0; j<10; j++){
          if(Bullet1[j]==1 && (bx[i]-Bullet1x[j])*(bx[i]-Bullet1x[j])+(by[i]-Bullet1y[j])*(by[i]-Bullet1y[j])<640){
            bh[i]-=20;
            Bullet1[j]=0;
          }
        }
      }
      else if(slhair.value()==2){
        for(let j=0; j<30; j++){
          if(Bullet2[j]==1 && (bx[i]-Bullet2x[j])*(bx[i]-Bullet2x[j])+(by[i]-Bullet2y[j])*(by[i]-Bullet2y[j])<640){
            bh[i]-=5;
            Bullet2[j]=0;
          }
        }
      }
      else{
        for(let j=0; j<50; j++){
          if(Bullet3[j]==1 && ((bx[i]-Bullet3x[j])*(bx[i]-Bullet3x[j])+(by[i]-Bullet3y[j])*(by[i]-Bullet3y[j])<640 || (bx[i]-Bullet3x[j]-x3shift[j])*(bx[i]-Bullet3x[j]-x3shift[j])+(by[i]-Bullet3y[j])*(by[i]-Bullet3y[j])<640 || (bx[i]-Bullet3x[j]+x3shift[j])*(bx[i]-Bullet3x[j]+x3shift[j])+(by[i]-Bullet3y[j])*(by[i]-Bullet3y[j])<640)){
            bh[i]-=4;
            Bullet3[j]=0;
          }
        }
      }
      if(bh[i]<=0){
        pt+=10;
        B[i]=0;
        by[i]=-40;
        bh[i]=10;
      }
      if(tB<1 && B[i]==0){
        B[i]=1;
        bx[i]=random(0, windowWidth);
        bh[i]=10;
      }
      if(B[i]==1){
        if(by[i]<windowHeight+40){
          if(state_S==1){
            by[i]+=2;
          }
        }
        else{
          B[i]=0;
          by[i]=-40;
        }
        circle(bx[i], by[i], 30);
      }
    }
  if(sllevel.value()>=2){
    for(let i=0; i<13; i++){
      let tC=random(0, 20);
      if((cx[i]-mouseX)*(cx[i]-mouseX)+(cy[i]-mouseY)*(cy[i]-mouseY)<640 && state_S==1){
        pt-=ch[i];
        hp-=ch[i];
        C[i]=0;
        cy[i]=-40;
        ch[i]=10;
      }
      if(slhair.value()==1){
        for(let j=0; j<10; j++){
          if(Bullet1[j]==1 && (cx[i]-Bullet1x[j])*(cx[i]-Bullet1x[j])+(cy[i]-Bullet1y[j])*(cy[i]-Bullet1y[j])<640){
            ch[i]-=20;
            Bullet1[j]=0;
          }
        }
      }
      else if(slhair.value()==2){
        for(let j=0; j<30; j++){
          if(Bullet2[j]==1 && (cx[i]-Bullet2x[j])*(cx[i]-Bullet2x[j])+(cy[i]-Bullet2y[j])*(cy[i]-Bullet2y[j])<640){
            ch[i]-=5;
            Bullet2[j]=0;
          }
        }
      }
      else{
        for(let j=0; j<50; j++){
          if(Bullet3[j]==1 && ((cx[i]-Bullet3x[j])*(cx[i]-Bullet3x[j])+(cy[i]-Bullet3y[j])*(cy[i]-Bullet3y[j])<640 || (cx[i]-Bullet3x[j]-x3shift[j])*(cx[i]-Bullet3x[j]-x3shift[j])+(cy[i]-Bullet3y[j])*(cy[i]-Bullet3y[j])<640 || (cx[i]-Bullet3x[j]+x3shift[j])*(cx[i]-Bullet3x[j]+x3shift[j])+(cy[i]-Bullet3y[j])*(cy[i]-Bullet3y[j])<640)){
            ch[i]-=4;
            Bullet3[j]=0;
          }
        }
      }
      if(ch[i]<=0){
        pt+=20;
        C[i]=0;
        cy[i]=-40;
        ch[i]=10;
      }
      if(tC<1 && C[i]==0){
        C[i]=1;
        cx[i]=random(0, windowWidth);
        ch[i]=10;
      }
      if(C[i]==1){
        if(cy[i]<windowHeight+40){
          if(state_S==1){
            cy[i]+=4;
          }
        }
        else{
          C[i]=0;
          cy[i]=-40;
        }
        push();
        fill('red');
        circle(cx[i], cy[i], 20);
        pop();
      }
    }
  }
  if(sllevel.value()>=3){
    for(let i=0; i<20; i++){
      let tD=random(0, 20);
      if((dx[i]-mouseX)*(dx[i]-mouseX)+(dy[i]-mouseY)*(dy[i]-mouseY)<640 && state_S==1){
        pt-=dh[i];
        hp-=dh[i];
        D[i]=0;
        dy[i]=-40;
        dh[i]=20;
      }
      if(slhair.value()==1){
        for(let j=0; j<10; j++){
          if(Bullet1[j]==1 && (dx[i]-Bullet1x[j])*(dx[i]-Bullet1x[j])+(dy[i]-Bullet1y[j])*(dy[i]-Bullet1y[j])<640){
            dh[i]-=20;
            Bullet1[j]=0;
          }
        }
      }
      else if(slhair.value()==2){
        for(let j=0; j<30; j++){
          if(Bullet2[j]==1 && (dx[i]-Bullet2x[j])*(dx[i]-Bullet2x[j])+(dy[i]-Bullet2y[j])*(dy[i]-Bullet2y[j])<640){
            dh[i]-=5;
            Bullet2[j]=0;
          }
        }
      }
      else{
        for(let j=0; j<50; j++){
          if(Bullet3[j]==1 && ((dx[i]-Bullet3x[j])*(dx[i]-Bullet3x[j])+(dy[i]-Bullet3y[j])*(dy[i]-Bullet3y[j])<640 || (dx[i]-Bullet3x[j]-x3shift[j])*(dx[i]-Bullet3x[j]-x3shift[j])+(dy[i]-Bullet3y[j])*(dy[i]-Bullet3y[j])<640 || (dx[i]-Bullet3x[j]+x3shift[j])*(dx[i]-Bullet3x[j]+x3shift[j])+(dy[i]-Bullet3y[j])*(dy[i]-Bullet3y[j])<640)){
            dh[i]-=4;
            Bullet3[j]=0;
          }
        }
      }
      if(dh[i]<=0){
        pt+=30;
        D[i]=0;
        dy[i]=-40;
        dh[i]=20;
      }
      if(tD<1 && D[i]==0){
        D[i]=1;
        dx[i]=random(0, windowWidth);
        dh[i]=10;
      }
      if(D[i]==1){
        if(dy[i]<windowHeight+40){
          if(state_S==1){
            dy[i]+=7;
          }
        }
        else{
          D[i]=0;
          dy[i]=-40;
        }
        push();
        fill('lightgreen');
        triangle(dx[i], dy[i], dx[i]+8, dy[i]+8*1.732, dx[i]-8, dy[i]+8*1.732);
        pop();
      }
    }
  }
  if(sllevel.value()>=4){
    let k=20;
    if(sllevel.value()==5){
      k=500;
    }
    for(let i=0; i<k; i++){
      let tE=random(0, 20);
      if((ex[i]-mouseX)*(ex[i]-mouseX)+(ey[i]-mouseY)*(ey[i]-mouseY)<640 && state_S==1){
        pt-=eh[i];
        hp-=eh[i];
        E[i]=0;
        ey[i]=-40;
        eh[i]=50;
      }
      if(slhair.value()==1){
        for(let j=0; j<10; j++){
          if(Bullet1[j]==1 && (ex[i]-Bullet1x[j])*(ex[i]-Bullet1x[j])+(ey[i]-Bullet1y[j])*(ey[i]-Bullet1y[j])<640){
            eh[i]-=20;
            Bullet1[j]=0;
          }
        }
      }
      else if(slhair.value()==2){
        for(let j=0; j<30; j++){
          if(Bullet2[j]==1 && (ex[i]-Bullet2x[j])*(ex[i]-Bullet2x[j])+(ey[i]-Bullet2y[j])*(ey[i]-Bullet2y[j])<640){
            eh[i]-=5;
            Bullet2[j]=0;
          }
        }
      }
      else{
        for(let j=0; j<50; j++){
          if(Bullet3[j]==1 && ((ex[i]-Bullet3x[j])*(ex[i]-Bullet3x[j])+(ey[i]-Bullet3y[j])*(ey[i]-Bullet3y[j])<640 || (ex[i]-Bullet3x[j]-x3shift[j])*(ex[i]-Bullet3x[j]-x3shift[j])+(ey[i]-Bullet3y[j])*(ey[i]-Bullet3y[j])<640 || (ex[i]-Bullet3x[j]+x3shift[j])*(ex[i]-Bullet3x[j]+x3shift[j])+(ey[i]-Bullet3y[j])*(ey[i]-Bullet3y[j])<640)){
            eh[i]-=4;
            Bullet3[j]=0;
          }
        }
      }
      if(eh[i]<=0){
        pt+=50;
        E[i]=0;
        ey[i]=-40;
        eh[i]=50;
      }
      if(tE<1 && E[i]==0){
        E[i]=1;
        ex[i]=random(0, windowWidth);
        eh[i]=50;
      }
      if(E[i]==1){
        if(ey[i]<windowHeight+40){
          if(state_S==1){
            ey[i]+=4;
          }
        }
        else{
          E[i]=0;
          ey[i]=-40;
        }
        push();
        fill('blue');
        rect(ex[i], ey[i], 20, 20);
        pop();
      }
    }
  }
}

function mouse(){
  push();
  fill('#00ddaa')
  if(state_G==1){
    let a=slmouse.value();
    ellipse(windowWidth/2, windowHeight/2+60, 20*a, 10*a); 
  }
  else if(state_G==2){
    let a=slmouse.value();
    ellipse(mouseX, mouseY+15, 5*a, 2.5*a); 
  }
  pop();
}

function hair(){
  push();
  fill(200, 200, 200);
  if(state_G==1){
    let a=slhair.value();
    if(a==1){
      rect(windowWidth/2-60, windowHeight/2-160, 120, 120);
    }
    else if(a==2){
      rect(windowWidth/2-55, windowHeight/2-200, 45, 120);
      rect(windowWidth/2+10, windowHeight/2-200, 45, 120);
    }
    else if(a==3){
      triangle(windowWidth/2, windowHeight/2-60, windowWidth/2, windowHeight/2-195, windowWidth/2-30, windowHeight/2-190);
      triangle(windowWidth/2, windowHeight/2-60, windowWidth/2, windowHeight/2-195, windowWidth/2+30, windowHeight/2-190);
      rect(windowWidth/2-15, windowHeight/2-200, 30, 90);
    }
  }
  else if(state_G==2){
    let a=slhair.value();
    if(a==1){
      rect(mouseX-15, mouseY-40, 30, 30);
    }
    else if(a==2){
      rect(mouseX-55/4, mouseY-50, 45/4, 30);
      rect(mouseX+2.5, mouseY-50, 45/4, 30);
    }
    else if(a==3){
      triangle(mouseX, mouseY-15, mouseX, mouseY-195/4, mouseX-30/4, mouseY-190/4);
      triangle(mouseX, mouseY-15, mouseX, mouseY-195/4, mouseX+30/4, mouseY-190/4);
      rect(mouseX-15/4, mouseY-50, 30/4, 90/4);
    }
  }
  pop();
}

function eye(){
  if(state_G==1){
    let a=sleye.value();
    push();
    fill('#afeeee');
    ellipse(windowWidth/2-40, windowHeight/2-20, 10*a, 6.5*a); 
    ellipse(windowWidth/2+40, windowHeight/2-20, 10*a, 6.5*a);
    fill('red');
    circle(windowWidth/2-40, windowHeight/2-20, 4*a);
    circle(windowWidth/2+40, windowHeight/2-20, 4*a);
    pop();
  }
  else if(state_G==2){
    let a=sleye.value();
    push();
    fill('#afeeee');
    ellipse(mouseX-10, mouseY-5, 2.5*a, 6.5/4*a); 
    ellipse(mouseX+10, mouseY-5, 2.5*a, 6.5/4*a);
    fill('darkred');
    circle(mouseX-10, mouseY-5, a);
    circle(mouseX+10, mouseY-5, a);
    pop();
  }
}

function ear(){
  push();
  fill('#ffb01c');
  if(state_G==1){
    let a=slear.value();
    ellipse(windowWidth/2-100, windowHeight/2, 15*a, 19.5*a);
    ellipse(windowWidth/2+100, windowHeight/2, 15*a, 19.5*a); 
  }
  else if(state_G==2){
    let a=slear.value();
    ellipse(mouseX-25, mouseY, 15/4*a, 19.5/4*a);
    ellipse(mouseX+25, mouseY, 15/4*a, 19.5/4*a); 
  }
  pop();
}

function nose(){
  push();
  fill('#cc00ff');
  if(state_G==1){
    let a=slnose.value();
    ellipse(windowWidth/2, windowHeight/2+20, 10*a, 8*a); 
  }
  else if(state_G==2){
    let a=slnose.value();
    ellipse(mouseX, mouseY+5, 2.5*a, 2*a); 
  }
  pop();
}

function face(){
  push();
  fill('#8ab576')
  if(state_G==1){
    let a=slface.value();
    ellipse(windowWidth/2, windowHeight/2, 50*a, 65*a); 
  }
  else if(state_G==2){
    let a=slface.value();
    ellipse(mouseX, mouseY, 12.5*a, 65/4*a); 
  }
  pop();
}

function GS0(){
  console.log("state1");
  state_G=1;
  button_START.html("-Ready-");
}

function GS1(){
  if(state_G==1){
    console.log("state2");
  }
  state_G=2;
  slnose.position(10000, 10000);
  slface.position(10000, 10000);
  sleye.position(10000, 10000);
  slear.position(10000, 10000);
  slmouse.position(10000, 10000);
  slhair.position(10000, 10000);
  sllevel.position(10000, 10000);
  if(state_S==1){
    state_S=0
    button_START.html("-Play-");
  }
  else{
    state_S=1;
    button_START.html("-Stop-");
  }
}
