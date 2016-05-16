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
#import "STKAudioPlayer.h"


@protocol PlayableDlegate<NSObject>
@optional


- (void)playerStateChanged:(STKAudioPlayerState)state previousState:(STKAudioPlayerState)previousState;
- (void)play;
- (void)pause;
@end

@interface Playable : NSObject <RCTBridgeModule, STKAudioPlayerDelegate>
    @property (weak) id<PlayableDlegate>delegate;
    @property (readwrite, retain) STKAudioPlayer* audioPlayer;
@end