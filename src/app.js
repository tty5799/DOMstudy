const HTML = `
<!DOCTYPE html>
<html lang="ko">
    <h1>안녕하세요!
</html>
`;

const parser = new DOMParser();
const doc = parser.parseFromString(HTML, 'text/html');

const newTag = doc.createElement("p")
const divContent = doc.createTextNode("저는 추가된 P 테그 입니다.")
newTag.appendChild(divContent)
doc.body.appendChild(newTag)

console.log(doc.documentElement,"dom API를 이용하여 새로운 노드 추가")

