let list = ['geek', 'geekster', 'geeky'];
if (list.includes('geekster')) {
    list.splice((list.indexOf('geekster')),1);
    console.log(list);
} else {
    console.log("Element Not Present in Array");
}