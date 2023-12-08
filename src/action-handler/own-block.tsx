export default (contentParam: string, selectionParam, fmtStr) => {
    console.log(selectionParam);
    let content;
    if(selectionParam.text){
        const one = contentParam.substring(0, selectionParam.start);
        const two = contentParam.substring(selectionParam.end, contentParam.length);
        const oneLastOneIsWrap = one[one.length - 1] === "\n";
        const twoFirstOneIsWrap = two[0] === "\n";
        content = one + (oneLastOneIsWrap ? "" : "\n")+"```" + "\n"+selectionParam.text+"\n"+"```"+(twoFirstOneIsWrap ? "" : "\n")+two;
    }else {
        const lastOneIsWrap = contentParam[contentParam.length - 1] === "\n";
        content = contentParam + (lastOneIsWrap ? "" : "\n") ;
        content = content + "```" + "\n\n"+"```";
    }
    
    const selection = {
      start: selectionParam.start + content.length,
      end: selectionParam.start + content.length,
    };
    return {
      content,
      selection,
    };
  };
  