//
//  REAViewTraverser.h
//  RNReanimated
//
//  Created by Szymon Kapala on 23/03/2021.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface REAViewTraverser : NSObject

+ (void)traverse:(UIView*)view withBlock:(void (^)(UIView*))block;

@end

NS_ASSUME_NONNULL_END