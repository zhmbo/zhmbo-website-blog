---
title: swift string和array互转
date: 2020-12-12 15:45:04
permalink: /pages/7a5e96/
article: false
sidebar: false
showPageNav: false
---



```swift
/// 获取字符出现的位置信息(支持多次位置获取)
/// - Parameter string: 原始文本
/// - Parameter inString: 需要查找的字符
private func rangeOfString(string:NSString, andInString inString:String) -> [NSRange] {
	var arrRange = [NSRange]()
	var _fullText = string
	var rang:NSRange = _fullText.range(of: inString)
        
	while rang.location != NSNotFound {
		var location:Int = 0
		if arrRange.count > 0 {
			if arrRange.last!.location + arrRange.last!.length < string.length {
				location = arrRange.last!.location + arrRange.last!.length
			}
		}
 
	  _fullText = NSString.init(string: _fullText.substring(from: rang.location + rang.length))
 
		if arrRange.count > 0 {
				rang.location += location
		}
		arrRange.append(rang)
    rang = _fullText.range(of: inString)
		}
        
		return arrRange
}
```

