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
    

}

@synthesize bridge = _bridge;
@synthesize delegate = delegate;
@synthesize audioPlayer = audioPlayer;


RCT_EXPORT_MODULE();



- (instancetype)init
{
    self = [super init];
    if (self) {
        if (!audioPlayer) {
            // Init _audioPlayer
            audioPlayer = [[STKAudioPlayer alloc] init];
            audioPlayer.delegate = self;
        }
    }
    return self;
}

RCT_EXPORT_METHOD(setStation:(NSDictionary *)stationData)
{
    
    if ([stationData[@"stationStreamURL"] caseInsensitiveCompare:currentStationURL] == NSOrderedSame) {
        // Make sure station is playing
        [audioPlayer resume];
    } else {
        currentStationURL = stationData[@"stationStreamURL"];
        [audioPlayer play:stationData[@"stationStreamURL"]];
        
    }
}

RCT_EXPORT_METHOD(play)
{
    [audioPlayer resume];
//    [self.delegate play];
}


RCT_EXPORT_METHOD(pause)
{
    [audioPlayer pause];
//    [self.delegate pause];
}


-(void) audioPlayer:(STKAudioPlayer*)audioPlayer stateChanged:(STKAudioPlayerState)state previousState:(STKAudioPlayerState)previousState
{
    
}

-(void) audioPlayer:(STKAudioPlayer*)audioPlayer unexpectedError:(STKAudioPlayerErrorCode)errorCode
{

}

-(void) audioPlayer:(STKAudioPlayer*)audioPlayer didStartPlayingQueueItemId:(NSObject*)queueItemId
{
}

-(void) audioPlayer:(STKAudioPlayer*)audioPlayer didFinishBufferingSourceWithQueueItemId:(NSObject*)queueItemId
{
   
    
    // This queues on the currently playing track to be buffered and played immediately after (gapless)

}

-(void) audioPlayer:(STKAudioPlayer*)audioPlayer didFinishPlayingQueueItemId:(NSObject*)queueItemId withReason:(STKAudioPlayerStopReason)stopReason andProgress:(double)progress andDuration:(double)duration
{
   
}

-(void) audioPlayer:(STKAudioPlayer *)audioPlayer logInfo:(NSString *)line
{
    NSLog(@"%@", line);
}



@end
