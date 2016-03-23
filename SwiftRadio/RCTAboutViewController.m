//
//  RCTAboutViewController.m
//  SwiftRadio
//
//  Created by Gregory Laughlin on 2016-03-20.
//  Copyright © 2016 CodeMarket.io. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "SwiftRadio-Swift.h"

//
//  RCTAboutViewController.m
//  RNEmbeddedAppExample
//
//  Created by Dave Sibiski on 9/2/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "RCTAboutViewController.h"
#import "RCTRootView.h"
#import "RCTRootView.h"
#import "Routeable.h"

@interface RCTAboutViewController ()

@end


@implementation RCTAboutViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    // Hide Nav Bar
//    [self.navigationController setNavigationBarHidden:YES];
    
    
    self.title = @"Passing Data";
    NSLog(@"VIEW DID LOAD");
    // We need a reference to the AppDelegate since that is where we stored our `RCTBridge`.
    AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    
    RCTBridge *bridge = delegate.reactNativeBridge;
    
    // Here we create a `RCTRootView` that initializes with the `RCTBridge` that we already pre-loaded.
    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge  moduleName:@"SwiftRadio" initialProperties:nil];
    
    
    // Here we are getting access to the already instanciated `Routeable` NativeModule and then
    // setting this controller as it's `Delegate`. This will enable the Coordinator to execute methods here, without
    // being coupled to this specific class.
    
    // Look up Routeable Module, this is possible because Routeable decalred with RCTBridgeModule.h
    Routeable *routeableModule = [bridge moduleForName:@"Routeable"];
    
    // set self in routebale module to ref this class. Now when methods are called in this module they will exec using this class
    [routeableModule setDelegate:self];
    
    
    // We want this view to take up the entire screen.
    rootView.frame = [UIScreen mainScreen].bounds;
    
    // Here is where we pass down our data that will be a `prop` in the `PassingData` component.
    //    rootView.initialProperties = [self data];
    
    // Each `ViewController` comes with it's own "base" view, here we just want to add our `RCTRootView`
    // to that "base" view so that it is visible on the screen.
    [self.view addSubview:rootView];
}

-(void)popRoute {
     [self.navigationController popToRootViewControllerAnimated:NO];
}

-(void)viewWillAppear:(BOOL)animated{
    [super viewWillAppear:animated];
    [self.navigationController setNavigationBarHidden:YES animated:animated]; //it hides
}

-(void)viewWillDisappear:(BOOL)animated{
    [super viewWillDisappear:animated];
    [self.navigationController setNavigationBarHidden:NO animated:animated]; // it shows
}
@end