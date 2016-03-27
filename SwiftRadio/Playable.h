//
//  Playable.h
//  SwiftRadio
//
//  Created by Gregory Laughlin on 2016-03-26.
//  Copyright © 2016 CodeMarket.io. All rights reserved.
//

#ifndef Playable_h
#define Playable_h


#endif /* Playable_h */

#import "RCTBridgeModule.h"

@interface Playable : NSObject <RCTBridgeModule>

-(void) changeStation: (NSString*)stationURL;

@end