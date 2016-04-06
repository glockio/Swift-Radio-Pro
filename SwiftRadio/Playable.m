//
//  Playable.m
//  SwiftRadio
//
//  Created by Gregory Laughlin on 2016-03-26.
//  Copyright © 2016 CodeMarket.io. All rights reserved.
//

// Playable.m
#import "Playable.h"
#import "RCTEventDispatcher.h"
#import "SwiftRadio-Swift.h"
#import "STKAudioPlayer.h"

@implementation Playable {
  NSString *currentStationURL;
  STKAudioPlayer *_audioPlayer;

}

RCT_EXPORT_MODULE();

- (instancetype)init
{
    self = [super init];
    if (self) {
        if (!_audioPlayer) {
            // Init _audioPlayer
            _audioPlayer = [[STKAudioPlayer alloc] init];
        }
    }
    return self;
}

RCT_EXPORT_METHOD(setStation:(NSDictionary *)stationData)
{
    
    if ([stationData[@"stationStreamURL"] caseInsensitiveCompare:currentStationURL] == NSOrderedSame) {
        // Make sure station is playing
        [_audioPlayer resume];
    } else {
        currentStationURL = stationData[@"stationStreamURL"];
        [_audioPlayer play:stationData[@"stationStreamURL"]];
        
    }
}

RCT_EXPORT_METHOD(play)
{
    [_audioPlayer resume];
}


RCT_EXPORT_METHOD(pause)
{
    [_audioPlayer pause];
}

@end
