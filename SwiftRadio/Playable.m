//
//  Playable.m
//  SwiftRadio
//
//  Created by Gregory Laughlin on 2016-03-26.
//  Copyright © 2016 CodeMarket.io. All rights reserved.
//

// Playable.m
#import <MediaPlayer/MediaPlayer.h>
#import "Playable.h"

@implementation Playable {
  MPMoviePlayerController *_moviePlayer;
  NSString *currentStationURL;
    
}

RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(setStation:(NSDictionary *)stationData)
{
    
//    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
//
        if(!_moviePlayer) {
            _moviePlayer =  [[MPMoviePlayerController alloc] init];
            _moviePlayer.view.frame = CGRectMake(0, 0, 0, 0);
            [_moviePlayer.view sizeToFit];
            _moviePlayer.shouldAutoplay = true;
            _moviePlayer.fullscreen = false;
            _moviePlayer.controlStyle = MPMovieControlStyleNone;
        }
        
//        [self changeStation:stationData[@"stationStreamURL"]];
        if (currentStationURL == stationData[@"stationStreamURL"]) {
            NSLog(@"Same Station...");
        } else {
            _moviePlayer.contentURL = [NSURL URLWithString:stationData[@"stationStreamURL"]];
            _moviePlayer.movieSourceType = MPMovieSourceTypeStreaming;
            [_moviePlayer prepareToPlay];
        }
        
//    });
    
}

-(void) changeStation: (NSString*)stationURL {
    if (currentStationURL == stationURL) {
        NSLog(@"Same Station...");
    } else {
        _moviePlayer.contentURL = [NSURL URLWithString:stationURL];
        _moviePlayer.movieSourceType = MPMovieSourceTypeStreaming;
        [_moviePlayer prepareToPlay];
    }

}


RCT_EXPORT_METHOD(play)
{
    [_moviePlayer play];
}


RCT_EXPORT_METHOD(pause)
{
    [_moviePlayer pause];
}

@end
