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
#import "RCTEventDispatcher.h"
#import "SwiftRadio-Swift.h"




@implementation Playable {
  MPMoviePlayerController *_moviePlayer;
  NSString *currentStationURL;
    
}




RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(setStation:(NSDictionary *)stationData)
{
    
        if(!_moviePlayer) {
            _moviePlayer =  [[MPMoviePlayerController alloc] init];
            _moviePlayer.view.frame = CGRectMake(0, 0, 0, 0);
            [_moviePlayer.view sizeToFit];
            _moviePlayer.shouldAutoplay = true;
            _moviePlayer.fullscreen = false;
            _moviePlayer.controlStyle = MPMovieControlStyleNone;
            
            // observe player loading state
            [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(moviePlayerLoadStateChanged:) name:MPMoviePlayerLoadStateDidChangeNotification object:nil];
            
        }
    
        if ([stationData[@"stationStreamURL"] caseInsensitiveCompare:currentStationURL] == NSOrderedSame) {
            // The staiton is alreay ready to play in this case so disptach dispatchLoadStateChangeEvent so RN component updates loading state.
            [self dispatchLoadStateChangeEvent];
        } else {
            currentStationURL = stationData[@"stationStreamURL"];
            _moviePlayer.contentURL = [NSURL URLWithString:stationData[@"stationStreamURL"]];
            _moviePlayer.movieSourceType = MPMovieSourceTypeStreaming;
            [_moviePlayer prepareToPlay];
        }
    
}



- (void) moviePlayerLoadStateChanged:(NSNotification*)notification {
    [self dispatchLoadStateChangeEvent];
}

-(void) dispatchLoadStateChangeEvent {
    // We need a reference to the AppDelegate since that is where we stored our `RCTBridge`.
    
    AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    RCTBridge *bridge = delegate.reactNativeBridge;

    NSDictionary *event = @{@"loadState": [NSNumber numberWithInt:_moviePlayer.loadState]};
    
    // Event names share global scope. Namespace with module name to avoid nameing collisions.
    [bridge.eventDispatcher sendDeviceEventWithName:@"Playable.onLoadStateChange"
                                               body:event ];

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
