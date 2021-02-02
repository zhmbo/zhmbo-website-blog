# [OS 向下取整、向上取整、四舍五入](https://www.cnblogs.com/muzijie/p/6489149.html)

向上取整：float ceilf(float);   double ceil(double);

向下取整：float floorf(float);  double floor(double);

四舍五入：float roundf(float);  double round(double);

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
    CGFloat a = 3.3;
    CGFloat ceilA = ceilf(a);
    CGFloat floorA = floorf(a);
    CGFloat roundA = roundf(a);
    
    NSLog(@"%lf 向上取整为%lf, 向下取整为%lf, 四舍五入为%lf", a, ceilA, floorA, roundA);
    
    double b = 5.8;
    double ceilB = ceil(b);
    double floorB = floor(b);
    double roundB = round(b);
    
    NSLog(@"%lf 向上取整为%lf, 向下取整为%lf, 四舍五入为%lf", b, ceilB, floorB, roundB);
    
    CGFloat c = -3.3;
    CGFloat ceilC = ceilf(c);
    CGFloat floorC = floorf(c);
    CGFloat roundC = roundf(c);
    
    NSLog(@"%lf 向上取整为%lf, 向下取整为%lf, 四舍五入为%lf", c, ceilC, floorC, roundC);
    
    double d = -5.8;
    double ceilD = ceil(d);
    double floorD = floor(d);
    double roundD = round(d);
    
    NSLog(@"%lf 向上取整为%lf, 向下取整为%lf, 四舍五入为%lf", d, ceilD, floorD, roundD);


// 打印结果
2017-03-02 10:03:47.570 UsingWebView[88462:10650303] 3.300000 向上取整为4.000000, 向下取整为3.000000, 四舍五入为3.000000
2017-03-02 10:03:47.572 UsingWebView[88462:10650303] 5.800000 向上取整为6.000000, 向下取整为5.000000, 四舍五入为6.000000
2017-03-02 10:03:47.573 UsingWebView[88462:10650303] -3.300000 向上取整为-3.000000, 向下取整为-4.000000, 四舍五入为-3.000000
2017-03-02 10:03:47.573 UsingWebView[88462:10650303] -5.800000 向上取整为-5.000000, 向下取整为-6.000000, 四舍五入为-6.000000
```