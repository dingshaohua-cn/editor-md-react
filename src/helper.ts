// 记录光标选中的信息
export const textSelect = (node: any) => {
  const { selectionStart: start, selectionEnd: end } = node.target;
  return {
    start,
    end,
    text: node.target.value.slice(start, end),
  };
};


/**
 * 指定位置插入字符
 * @param str 需要被插入的原始字符串
 * @param index 位置
 * @param insertStr 需要插入的
 * @returns 
 */
export const insertStr = (str, index, insertStr) => {
  const ary = str.split(""); // 转化为数组
  ary.splice(index, 0, insertStr); // 使用数组方法插入字符串
  return ary.join(""); // 拼接成字符串后输出
};

/**
 * 中划线转驼峰
 * @param name 
 * @returns 
 */
export const toHump = (name)=> {
  return name.replace(/\-(\w)/g, (all, letter)=>(letter.toUpperCase()));
}


 /**
  * 设置文本域选中区域
  * @param element 设置目标
  * @param postion 选区位置
  */
 export const setSelectionRange = (element: HTMLTextAreaElement,postion) => {
  element.setSelectionRange(postion.start, postion.end);
  element.focus();
};



export const deleteCharacterAt = (str, index)=> {
  return str.substring(0, index) + str.substring(index + 1);
}