var highlight=window.getSelection().toString();
var i =0;
var count = 1;
for (i = 0; i < highlight.length; i++){
  if (highlight.substring(i,i+1).localeCompare(" ")==0){
    count++;
  }

}
if (highlight.substring(highlight.length-1).localeCompare(" ")==0){
  count--;
}

if (highlight.substring(0,1).localeCompare(" ")==0){
  count--;
}

if(highlight.length == 0){
  count = 0;
}
alert("Word count: "+ count+"\n" +"Character count: "+highlight.length+"\n");
