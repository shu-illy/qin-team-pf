export const textToHtml = (text: string): string => {
  // 改行コードをbrタグに変換
  const lineFeedExp = /(\n)/g;
  let convertedText = text.replace(lineFeedExp, "<br>");

  // 正規表現でURLを抽出してaタグに変換する
  const urlRegExp = /(https?:\/\/[\w!?/+\-_~;.,*&@#$%()'[\]]+)/g;
  convertedText = convertedText.replace(
    urlRegExp,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // TODO 正規表現でハッシュタグ、リプ抽出してaタグに変換する
  return convertedText;
};

export const htmlToText = (html: string): string => {
  return html.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
};
