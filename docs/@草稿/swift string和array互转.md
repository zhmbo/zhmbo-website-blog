### 将一个`Character`s 数组转换为一个`String`没有分隔符的数组：

```
let characterArray: [Character] = ["J", "o", "h", "n"]let string = String(characterArray)print(string)// prints "John"
```

------

### 将一个`String`s 数组转换为一个`String`没有分隔符的数组：

```
let stringArray = ["Bob", "Dan", "Bryan"]let string = stringArray.joined(separator: "")print(string) // prints: "BobDanBryan"
```

------

### 将一个`String`s 数组转换为一个`String`单词之间的分隔符：

```
let stringArray = ["Bob", "Dan", "Bryan"]let string = stringArray.joined(separator: " ")print(string) // prints: "Bob Dan Bryan"
```

------

### 将`String`s 数组转换为a `String`，在字符之间使用分隔符：

```
let stringArray = ["car", "bike", "boat"]let characterArray = stringArray.flatMap { $0 }let stringArray2 = characterArray.map { String($0) }let string = stringArray2.joined(separator: ", ")print(string) // prints: "c, a, r, b, i, k, e, b, o, a, t"
```

------

### 将数组`Float`s转换为`String`数字之间的分隔符：

```
let floatArray = [12, 14.6, 35]let stringArray = floatArray.map { String($0) }let string = stringArray.joined(separator: "-")print(string)// prints "12.0-14.6-35.0"
```