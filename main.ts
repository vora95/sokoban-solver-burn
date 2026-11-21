import fs from'fs'
let W,A,D,C='rldu',d,m,B,G,F,V,S,I='/input/',O='/output/'
F=(b,f)=>{let q=[f];d={[f]:''};m=f;for(let x of q)for(let k=4;k--;){let z=x+D[k];if(A[z]||b.includes(z)||z in d)continue;d[z]=d[x]+C[k];q.push(z);if(z<m)m=z}}
V=p=>{F(B,p);let s={[m+':'+B]:1},q=[[B,p,'']];for(let[b,e,v]of q){if(''+b==''+G)return[v,e];F(b,e);W=d;for(let i in b)for(let k=4;k--;){let x=b[i],f=x-D[k],u=x+D[k];if(!(f in W)||A[u]||b.includes(u))continue;let n=[...b],w=W[f];n[i]=u;n.sort((a,b)=>a-b);F(n,x);if(!s[m+':'+n])s[m+':'+n]=1,q.push([n,x,v+w+C[k]])}}return null}
S=t=>{W=t.indexOf(10)+1;D=[1,-1,W,-W];A=[];let R={},p;t.forEach((c,i)=>{let r=(i/W>8)|2*(i%W>7);A[i]=c%5==0;if(c>41&c<47)(R[r]??={b:[],g:[]}).g.push(i);if(c%6==0)(R[r]??={b:[],g:[]}).b.push(i);if(c>60)p=i});let v='';for(let r in R){let{b,g}=R[r];if(b.length-g.length)return'';B=b;G=g;let s=V(p);if(!s)return'';v+=s[0];p=s[1];g.map(x=>A[x]=1)}return v}
fs.readdirSync(I).forEach(a=>{let s='';try{s=S(fs.readFileSync(I+a+'/level.txt'))}catch{}fs.mkdirSync(O+a,{recursive:!0});fs.writeFileSync(O+a+'/solution.txt',s)})
