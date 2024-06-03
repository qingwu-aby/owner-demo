/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2024-06-03 15:44:28
 * @LastEditTime: 2024-06-03 17:50:52
 */
const logEnhancer = () => {
  const isEmpty = (value: string | never) => {
    return value === null || value === undefined || value === '';
  } 
  const enhancerLogStyle = (title: string, text: string, color: string) => {
      console.log(
        `%c ${title}`,
        `
        background: ${color};
        border:1px solid ${color};
        padding: 1px;
        border-radius: 2px 0 0 2px;
        color: #fff;
      `,
        text
      );
  };
  const info = (title: string, content: never | any) => {
    const header = isEmpty(title) ? 'Info' : title;
    const text = isEmpty(content) ? 'Φ' : content;

    enhancerLogStyle(header, text, '#3eaf7c');
  };
  const log = () => { };
  const table = () => { };
  const error = (title: string, content: never) => {
    const header = isEmpty(title) ? 'Info' : title;
    const text = isEmpty(content) ? 'Φ' : content;

    enhancerLogStyle(header, text, '#C75000');
  };
  const warning = () => { };

  return {
    info,
    log,
    table,
    error,
    warning
  }
}

export const log = logEnhancer();
