/**
 * 获取输入框中光标所在位置
 * @param  {HTMLFormElement} el 需要获取的输入框元素
 * @returns 光标所在位置的下标
 */
export function getCursorPosition(el: HTMLFormElement): number {
  return el.selectionStart
}
