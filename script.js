(function(){
    var script = {
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "horizontalAlign": "left",
 "desktopMipmappingEnabled": false,
 "width": "100%",
 "class": "Player",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "paddingBottom": 0,
 "defaultVRPointer": "laser",
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "definitions": [{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_t.jpg",
 "label": "bedroom2",
 "hfovMin": "135%",
 "id": "panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C997E59D_C4CB_2BCB_41D0_B7317A447F9B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C997E59D_C4CB_2BCB_41D0_B7317A447F9B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C997E59D_C4CB_2BCB_41D0_B7317A447F9B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C997E59D_C4CB_2BCB_41D0_B7317A447F9B_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C997E59D_C4CB_2BCB_41D0_B7317A447F9B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C997E59D_C4CB_2BCB_41D0_B7317A447F9B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C997E59D_C4CB_2BCB_41D0_B7317A447F9B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C997E59D_C4CB_2BCB_41D0_B7317A447F9B_t.jpg",
 "label": "sampleflat",
 "hfovMin": "150%",
 "id": "panorama_C997E59D_C4CB_2BCB_41D0_B7317A447F9B",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.94,
  "pitch": 0.12,
  "hfov": 125
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "manualZoomSpeed": 2,
 "class": "PanoramaCamera",
 "id": "panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_t.jpg",
 "label": "outside7",
 "hfovMin": "135%",
 "id": "panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "items": [
  {
   "media": "this.panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_camera"
  },
  {
   "media": "this.panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_camera"
  },
  {
   "media": "this.panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_camera"
  },
  {
   "media": "this.panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_camera"
  },
  {
   "media": "this.panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_camera"
  },
  {
   "media": "this.panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_camera"
  },
  {
   "media": "this.panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_camera"
  },
  {
   "media": "this.panorama_C8067903_C4D9_58BF_41CE_7364D08DC161",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_camera"
  },
  {
   "media": "this.panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_camera"
  },
  {
   "media": "this.panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_camera"
  },
  {
   "media": "this.panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_camera"
  },
  {
   "media": "this.panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_camera"
  },
  {
   "media": "this.panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_camera"
  },
  {
   "media": "this.panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD_camera"
  },
  {
   "media": "this.panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_camera"
  },
  {
   "media": "this.panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_camera"
  },
  {
   "media": "this.panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_camera"
  },
  {
   "media": "this.panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_camera"
  },
  {
   "media": "this.panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_camera"
  },
  {
   "media": "this.panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_camera"
  },
  {
   "media": "this.panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_camera"
  },
  {
   "media": "this.panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_camera"
  },
  {
   "media": "this.panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_camera"
  },
  {
   "media": "this.panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_camera"
  },
  {
   "media": "this.panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_camera"
  },
  {
   "media": "this.panorama_C81B81F7_C4C9_2B47_41C5_622261F86052",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_camera"
  },
  {
   "media": "this.panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_camera"
  },
  {
   "media": "this.panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_camera"
  },
  {
   "media": "this.panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_camera"
  },
  {
   "media": "this.panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_camera"
  },
  {
   "media": "this.panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_camera"
  },
  {
   "media": "this.panorama_C81D7013_C4C8_E8DF_4194_755BF914896E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_camera"
  },
  {
   "media": "this.panorama_C997E59D_C4CB_2BCB_41D0_B7317A447F9B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C997E59D_C4CB_2BCB_41D0_B7317A447F9B_camera"
  },
  {
   "media": "this.panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_camera"
  },
  {
   "media": "this.panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_camera"
  },
  {
   "media": "this.panorama_C817BC37_C4CB_58D8_41B6_ABA252505956",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_camera"
  },
  {
   "media": "this.panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_camera"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_t.jpg",
 "label": "outside2",
 "hfovMin": "135%",
 "id": "panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_t.jpg",
 "label": "out5",
 "hfovMin": "135%",
 "id": "panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_t.jpg",
 "label": "gym",
 "hfovMin": "135%",
 "id": "panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_t.jpg",
 "label": "outside5",
 "hfovMin": "135%",
 "id": "panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.87,
  "pitch": -0.49,
  "hfov": 12
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -2.87,
    "yawSpeed": 12.8,
    "targetPitch": -0.49,
    "path": "shortest",
    "easing": "cubic_in_out",
    "end": "this.mainPlayList.set('selectedIndex', 0)",
    "pitchSpeed": 6.8
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 0,
 "class": "PanoramaCamera",
 "id": "panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_camera",
 "manualRotationSpeed": 1525,
 "automaticZoomSpeed": 9,
 "automaticRotationSpeed": 33
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_camera"
  },
  {
   "media": "this.panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_camera"
  },
  {
   "media": "this.panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_camera"
  },
  {
   "media": "this.panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_camera"
  },
  {
   "media": "this.panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_camera"
  },
  {
   "media": "this.panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_camera"
  },
  {
   "media": "this.panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_camera"
  },
  {
   "media": "this.panorama_C8067903_C4D9_58BF_41CE_7364D08DC161",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_camera"
  },
  {
   "media": "this.panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_camera"
  },
  {
   "media": "this.panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_camera"
  },
  {
   "media": "this.panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_camera"
  },
  {
   "media": "this.panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_camera"
  },
  {
   "media": "this.panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_camera"
  },
  {
   "media": "this.panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD_camera"
  },
  {
   "media": "this.panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_camera"
  },
  {
   "media": "this.panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_camera"
  },
  {
   "media": "this.panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_camera"
  },
  {
   "media": "this.panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_camera"
  },
  {
   "media": "this.panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_camera"
  },
  {
   "media": "this.panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_camera"
  },
  {
   "media": "this.panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_camera"
  },
  {
   "media": "this.panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_camera"
  },
  {
   "media": "this.panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_camera"
  },
  {
   "media": "this.panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_camera"
  },
  {
   "media": "this.panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_camera"
  },
  {
   "media": "this.panorama_C81B81F7_C4C9_2B47_41C5_622261F86052",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_camera"
  },
  {
   "media": "this.panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_camera"
  },
  {
   "media": "this.panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_camera"
  },
  {
   "media": "this.panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_camera"
  },
  {
   "media": "this.panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_camera"
  },
  {
   "media": "this.panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_camera"
  },
  {
   "media": "this.panorama_C81D7013_C4C8_E8DF_4194_755BF914896E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_camera"
  },
  {
   "media": "this.panorama_C997E59D_C4CB_2BCB_41D0_B7317A447F9B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C997E59D_C4CB_2BCB_41D0_B7317A447F9B_camera"
  },
  {
   "media": "this.panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_camera"
  },
  {
   "media": "this.panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_camera"
  },
  {
   "media": "this.panorama_C817BC37_C4CB_58D8_41B6_ABA252505956",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_camera"
  },
  {
   "media": "this.panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_camera"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3_t.jpg",
 "label": "outsidekidsplay",
 "hfovMin": "135%",
 "id": "panorama_C9E92CAB_C4C9_39CE_41B2_CDC946898AF3",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_t.jpg",
 "label": "outside6",
 "hfovMin": "135%",
 "id": "panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_t.jpg",
 "label": "outside",
 "hfovMin": "135%",
 "id": "panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_camera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_t.jpg",
 "label": "entrygate",
 "id": "panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7E374C3_C4C9_29BF_41E5_F941D82148EB",
  "this.overlay_DCC9F53A_C538_2856_41DD_C52913EB554D"
 ],
 "vfov": 180,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 360,
 "hfovMin": "150%",
 "hfov": 360
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463_t.jpg",
 "label": "sampleflatdoor2",
 "hfovMin": "135%",
 "id": "panorama_C855BAC2_C4CB_79B8_41B2_A3FF8BEB5463",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C997E59D_C4CB_2BCB_41D0_B7317A447F9B_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A_t.jpg",
 "label": "outsi7",
 "hfovMin": "135%",
 "id": "panorama_C9D3B914_C4C9_78DA_41E3_AD83058ED64A",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C8067903_C4D9_58BF_41CE_7364D08DC161_t.jpg",
 "label": "clubhouseoutside",
 "hfovMin": "150%",
 "id": "panorama_C8067903_C4D9_58BF_41CE_7364D08DC161",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD_t.jpg",
 "label": "garden",
 "hfovMin": "150%",
 "id": "panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_t.jpg",
 "label": "bedroom4",
 "hfovMin": "135%",
 "id": "panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_t.jpg",
 "label": "firstfloor",
 "id": "panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_DCA167E0_C528_37F3_41D5_048C3F091A11"
 ],
 "vfov": 180,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfovMin": "135%",
 "hfov": 360
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC_t.jpg",
 "label": "out4",
 "hfovMin": "135%",
 "id": "panorama_C85DAAAD_C4D7_39CB_41C7_E770007743DC",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_t.jpg",
 "label": "readingout",
 "hfovMin": "135%",
 "id": "panorama_C81D7013_C4C8_E8DF_4194_755BF914896E",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1_t.jpg",
 "label": "bedroom3",
 "hfovMin": "135%",
 "id": "panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_t.jpg",
 "label": "clubhouse_outside",
 "hfovMin": "150%",
 "id": "panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C82EE3D4_C4C9_2F59_41E4_D685F69AE2B5_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C86C96DB_C4D9_694F_41C0_51AE47721EED_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_t.jpg",
 "label": "kidsPlay",
 "hfovMin": "135%",
 "id": "panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C85F2228_C4D9_68C8_41DB_E15A1F782781_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_t.jpg",
 "label": "bedroom",
 "hfovMin": "135%",
 "id": "panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C81214F8_C4C9_E949_41E7_ACB3CF3A3BED_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_t.jpg",
 "label": "game",
 "hfovMin": "135%",
 "id": "panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_t.jpg",
 "label": "building",
 "hfovMin": "150%",
 "id": "panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6_t.jpg",
 "label": "outs3",
 "hfovMin": "135%",
 "id": "panorama_C86CE1A4_C4C9_2BF9_41E4_91F8ADEA4AE6",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C9D91B28_C4D9_58C8_4192_7C571435C00A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C84582A5_C4D7_69FB_41B1_82BD109273DB_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C81D7013_C4C8_E8DF_4194_755BF914896E_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_t.jpg",
 "label": "sampleflatHall",
 "hfovMin": "135%",
 "id": "panorama_C817BC37_C4CB_58D8_41B6_ABA252505956",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C85D5891_C4D9_D9DB_41E4_935F5CBD20A3_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C83B7E58_C4D7_7949_41BB_9695C88246EA_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91_t.jpg",
 "label": "clubhouse",
 "hfovMin": "135%",
 "id": "panorama_C8667ECC_C4D9_3949_41D5_928E6D79BF91",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085_t.jpg",
 "label": "sampleflatdoor",
 "hfovMin": "135%",
 "id": "panorama_C87DC0CA_C4CB_2949_41C4_5F7B8F659085",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C817BC37_C4CB_58D8_41B6_ABA252505956_camera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_t.jpg",
 "label": "drawingroom",
 "id": "panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8B95150_C4D9_EB58_41E1_0E68FF9003F1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8BE9ADA_C4D9_3948_41E2_4B77C47213C1"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_DE5B171C_C518_2853_41DF_B3498D08F798",
  "this.overlay_DFA4E0C0_C518_2832_41E2_7BDDCB6A296F"
 ],
 "vfov": 180,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfovMin": "150%",
 "hfov": 360
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66_t.jpg",
 "label": "outside1",
 "hfovMin": "135%",
 "id": "panorama_C822F136_C4C9_28D9_41C0_9466E7F32A66",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C84C748E_C4C8_E9C9_41E5_F458A0A77474_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550_t.jpg",
 "label": "outs2",
 "hfovMin": "135%",
 "id": "panorama_C84CEC74_C4C8_D959_41DC_57E7E5CF4550",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3_t.jpg",
 "label": "gallary",
 "hfovMin": "135%",
 "id": "panorama_C8577F13_C4D7_58DF_41D6_EAD0082C1EE3",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C81B81F7_C4C9_2B47_41C5_622261F86052_t.jpg",
 "label": "outside3",
 "hfovMin": "135%",
 "id": "panorama_C81B81F7_C4C9_2B47_41C5_622261F86052",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_t.jpg",
 "label": "gate",
 "id": "panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8720677_C4D7_2947_41D1_3A971A9C3DDD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33"
  }
 ],
 "partial": true,
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_DD1B0471_C539_E8D5_41E6_20EB7CA18962",
  "this.overlay_DC2789FD_C528_1BD2_41E0_EE1D35233838"
 ],
 "vfov": 50,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 16,
      "rowCount": 16,
      "width": 8192,
      "height": 8192,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "height": 4096,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 16,
      "rowCount": 16,
      "width": 8192,
      "height": 8192,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "height": 4096,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 16,
      "rowCount": 16,
      "width": 8192,
      "height": 8192,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "height": 4096,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_t.jpg"
  }
 ],
 "hfovMax": 30,
 "hfovMin": "135%",
 "hfov": 100
},
{
 "thumbnailUrl": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_t.jpg",
 "label": "firstfloors",
 "id": "panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C9C341ED_C4D7_2B4B_41E6_D4B12AD31E74"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_D823058A_C528_2836_41E4_118F529B0517",
  "this.overlay_DCCCD31A_C528_E857_41D8_07986A06DEA0"
 ],
 "vfov": 180,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfovMin": "135%",
 "hfov": 360
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554_t.jpg",
 "label": "gardenvi",
 "hfovMin": "150%",
 "id": "panorama_C87A0154_C4D7_2B59_41AF_4D6C54362554",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C9F89B7D_C4C9_5F4B_41C9_2D445DE10D85_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C80A8871_C4C9_595B_41DA_3AB827E4C70C_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "partial": false,
 "thumbnailUrl": "media/panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E_t.jpg",
 "label": "reading",
 "hfovMin": "135%",
 "id": "panorama_C9D8BBE0_C4C8_DF79_41E6_2FBE0E36911E",
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C9D7F37F_C4C9_6F47_41D2_9938C23D8328_camera",
 "automaticZoomSpeed": 10
},
{
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "id": "MainViewer",
 "left": 0,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "width": "100%",
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowColor": "#333333",
 "progressRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingRight": 10,
 "progressOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Georgia",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipPaddingTop": 7,
 "playbackBarHeadShadow": true,
 "playbackBarLeft": 0,
 "vrPointerSelectionTime": 2000,
 "height": "100%",
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundOpacity": 1,
 "firstTransitionDuration": 0,
 "borderSize": 0,
 "progressBottom": 55,
 "playbackBarProgressBorderColor": "#000000",
 "progressHeight": 6,
 "borderRadius": 0,
 "playbackBarBottom": 5,
 "playbackBarOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "playbackBarHeadHeight": 15,
 "toolTipFontSize": 13,
 "vrPointerColor": "#FFFFFF",
 "propagateClick": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBorderSize": 0,
 "class": "ViewerArea",
 "toolTipPaddingBottom": 7,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "progressLeft": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "progressBorderRadius": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "toolTipBorderRadius": 3,
 "minHeight": 50,
 "playbackBarHeight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "top": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarBorderColor": "#FFFFFF",
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipShadowSpread": 0,
 "minWidth": 100,
 "toolTipShadowOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderSize": 6,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "playbackBarRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowBlurRadius": 3,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "layout": "absolute",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "horizontalAlign": "left",
 "width": 115.05,
 "class": "Container",
 "paddingBottom": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": 641,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingRight": 0,
 "propagateClick": true
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Image_CACCD8D5_C528_F9D2_41B8_0E1EF1589B6E"
 ],
 "layout": "absolute",
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "horizontalAlign": "left",
 "width": 573,
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": 15,
 "scrollBarMargin": 2,
 "height": 133,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingRight": 0,
 "propagateClick": true
},
{
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "layout": "absolute",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "horizontalAlign": "left",
 "class": "Container",
 "paddingBottom": 0,
 "right": "0%",
 "backgroundOpacity": 0.64,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "bottom": 0,
 "height": 118,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingRight": 0,
 "propagateClick": true
},
{
 "visible": false,
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "layout": "absolute",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "horizontalAlign": "left",
 "class": "Container",
 "paddingBottom": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "contentOpaque": false,
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": true
},
{
 "visible": false,
 "data": {
  "name": "--INFO photoalbum"
 },
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "layout": "absolute",
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "horizontalAlign": "left",
 "class": "Container",
 "paddingBottom": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "contentOpaque": false,
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": true
},
{
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "layout": "absolute",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "horizontalAlign": "left",
 "class": "Container",
 "paddingBottom": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "contentOpaque": false,
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": true
},
{
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "layout": "absolute",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "horizontalAlign": "left",
 "class": "Container",
 "paddingBottom": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "contentOpaque": false,
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": true
},
{
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "layout": "absolute",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "horizontalAlign": "left",
 "class": "Container",
 "paddingBottom": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "contentOpaque": false,
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": true
},
{
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "layout": "absolute",
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "horizontalAlign": "left",
 "class": "Container",
 "paddingBottom": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "contentOpaque": false,
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": true
},
{
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "layout": "absolute",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "horizontalAlign": "left",
 "class": "Container",
 "paddingBottom": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "contentOpaque": false,
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": true
},
{
 "visible": false,
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "layout": "absolute",
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "horizontalAlign": "left",
 "class": "Container",
 "paddingBottom": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "contentOpaque": false,
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#04A3E1",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": true
},
{
 "data": {
  "name": "IconButton MUTE"
 },
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "maxHeight": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 58,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "maxHeight": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 58,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9D4BC6E_C547_C8FE_41E6_AAFEF8196793",
   "yaw": 18.14,
   "pitch": -0.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 11.94
  }
 ],
 "id": "overlay_D7E374C3_C4C9_29BF_41E5_F941D82148EB",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.33,
   "hfov": 11.94
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Garden\u000a"
  }
 ],
 "data": {
  "label": "Arrow 03 Right-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9D48C6F_C547_C8FE_41E4_3FBDA72B6718",
   "yaw": 50.47,
   "pitch": -12.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 18.87
  }
 ],
 "id": "overlay_DCC9F53A_C538_2856_41DD_C52913EB554D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.93,
   "hfov": 18.87
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9D79C6A_C547_C8E6_41E8_2FBC8711BE53",
   "yaw": -74.9,
   "pitch": -17.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 23.79
  }
 ],
 "id": "overlay_DCA167E0_C528_37F3_41D5_048C3F091A11",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -74.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.1,
   "hfov": 23.79
  }
 ]
},
{
 "data": {
  "name": "IconButton HS "
 },
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "maxHeight": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 58,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "data": {
  "name": "IconButton VR"
 },
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "maxHeight": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 58,
 "shadow": false,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "visible": false,
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "data": {
  "name": "IconButton VR"
 },
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "width": 100,
 "class": "IconButton",
 "paddingBottom": 0,
 "maxHeight": 37,
 "right": 30,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": 8,
 "height": 75,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "data": {
  "name": "IconButton GYRO"
 },
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "maxHeight": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 58,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9D71C63_C547_C8E6_4172_94220E46FE38",
   "yaw": 22.27,
   "pitch": -21.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 31.57
  }
 ],
 "id": "overlay_DE5B171C_C518_2853_41DF_B3498D08F798",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.55,
   "hfov": 31.57
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9D7CC69_C547_C8E2_41D4_2FD79DDF1326",
   "yaw": 46.65,
   "pitch": -16.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 23.83
  }
 ],
 "id": "overlay_DFA4E0C0_C518_2832_41E2_7BDDCB6A296F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.78,
   "hfov": 23.83
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 03b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9D42C6C_C547_C8E2_41D1_B54B389152D9",
   "yaw": 24.87,
   "pitch": -2.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.6
  }
 ],
 "id": "overlay_DD1B0471_C539_E8D5_41E6_20EB7CA18962",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2,
   "hfov": 3.6
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9D4FC6D_C547_C8E2_41B9_FA4BFA83B9B4",
   "yaw": -6.98,
   "pitch": -0.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.12
  }
 ],
 "id": "overlay_DC2789FD_C528_1BD2_41E0_EE1D35233838",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.18,
   "hfov": 5.12
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_C9D47C6A_C547_C8E6_41DD_E5717DDD083B",
   "yaw": -95.41,
   "pitch": -24.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 31
  }
 ],
 "id": "overlay_D823058A_C528_2836_41E4_118F529B0517",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.02,
   "hfov": 31
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Falt"
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_1_HS_1_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.15,
   "yaw": 158.8,
   "hfov": 12.62
  }
 ],
 "id": "overlay_DCCCD31A_C528_E857_41D8_07986A06DEA0",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.15,
   "hfov": 12.62
  }
 ]
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "layout": "horizontal",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "horizontalAlign": "center",
 "width": 110,
 "class": "Container",
 "paddingBottom": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": 110,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingRight": 0,
 "propagateClick": true
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "layout": "vertical",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "horizontalAlign": "center",
 "width": "91.304%",
 "class": "Container",
 "paddingBottom": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "gap": 3,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "height": "85.959%",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "visible": false,
 "paddingRight": 0,
 "propagateClick": true
},
{
 "data": {
  "name": "Image4915"
 },
 "maxWidth": 811,
 "id": "Image_CACCD8D5_C528_F9D2_41B8_0E1EF1589B6E",
 "left": "0%",
 "horizontalAlign": "center",
 "maxHeight": 522,
 "class": "Image",
 "paddingBottom": 0,
 "width": "32.112%",
 "url": "skin/Image_CACCD8D5_C528_F9D2_41B8_0E1EF1589B6E.png",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "height": "100%",
 "shadow": false,
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "white line"
 },
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "horizontalAlign": "center",
 "maxHeight": 2,
 "class": "Image",
 "paddingBottom": 0,
 "right": "0%",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": 53,
 "height": 2,
 "shadow": false,
 "minWidth": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "layout": "horizontal",
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "horizontalAlign": "left",
 "width": 1199,
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "gap": 3,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 30,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "height": 51,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingRight": 0,
 "propagateClick": true
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "layout": "horizontal",
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "horizontalAlign": "left",
 "class": "Container",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "right": "10%",
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "shadowBlurRadius": 25,
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "5%",
 "shadow": true,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "layout": "vertical",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "horizontalAlign": "right",
 "class": "Container",
 "paddingBottom": 0,
 "right": "10%",
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingRight": 20,
 "propagateClick": false
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "layout": "horizontal",
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "horizontalAlign": "left",
 "class": "Container",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "right": "10%",
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "shadowBlurRadius": 25,
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "5%",
 "shadow": true,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "layout": "vertical",
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "horizontalAlign": "right",
 "class": "Container",
 "paddingBottom": 0,
 "right": "10%",
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingRight": 20,
 "propagateClick": false
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "layout": "vertical",
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "horizontalAlign": "center",
 "class": "Container",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "right": "15%",
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "shadowBlurRadius": 25,
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "7%",
 "shadow": true,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "layout": "horizontal",
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "horizontalAlign": "left",
 "class": "Container",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "right": "10%",
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "shadowBlurRadius": 25,
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "5%",
 "shadow": true,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "layout": "vertical",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "horizontalAlign": "right",
 "class": "Container",
 "paddingBottom": 0,
 "right": "10%",
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingRight": 20,
 "propagateClick": false
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "layout": "vertical",
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "horizontalAlign": "center",
 "class": "Container",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "right": "15%",
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "shadowBlurRadius": 25,
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "7%",
 "shadow": true,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "layout": "vertical",
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "horizontalAlign": "center",
 "class": "Container",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "right": "15%",
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "shadowBlurRadius": 25,
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "7%",
 "shadow": true,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "layout": "vertical",
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "horizontalAlign": "center",
 "class": "Container",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "right": "15%",
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "shadowBlurRadius": 25,
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "7%",
 "shadow": true,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "layout": "horizontal",
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "horizontalAlign": "left",
 "class": "Container",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "right": "10%",
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "shadowBlurRadius": 25,
 "verticalAlign": "top",
 "gap": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": "5%",
 "shadow": true,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "layout": "vertical",
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "horizontalAlign": "right",
 "class": "Container",
 "paddingBottom": 0,
 "right": "10%",
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingRight": 20,
 "propagateClick": false
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_C9D4BC6E_C547_C8FE_41E6_AAFEF8196793",
 "frameCount": 9,
 "colCount": 3,
 "frameDuration": 62
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C814CD39_C4D8_D8CB_41E2_7488C2ADE1A9_1_HS_1_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 960
  }
 ],
 "id": "AnimatedImageResource_C9D48C6F_C547_C8FE_41E4_3FBDA72B6718",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C9D203A9_C4D8_EFCB_41E0_9E55979EF59A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_C9D79C6A_C547_C8E6_41E8_2FBC8711BE53",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_C9D71C63_C547_C8E6_4172_94220E46FE38",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C87B89A9_C4D9_3BCB_41CF_3C22D91E574B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_C9D7CC69_C547_C8E2_41D4_2FD79DDF1326",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_1_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_C9D42C6C_C547_C8E2_41D1_B54B389152D9",
 "frameCount": 30,
 "colCount": 5,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C80DC56B_C4D7_EB4F_41CC_282E27646F48_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C9D4FC6D_C547_C8E2_41B9_FA4BFA83B9B4",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C83BB97D_C4D7_3B4B_41DB_3158B39D8E33_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_C9D47C6A_C547_C8E6_41DD_E5717DDD083B",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "data": {
  "name": "image button menu"
 },
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "maxHeight": 60,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 60,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 60,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "data": {
  "name": "IconButton TWITTER"
 },
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "maxHeight": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 58,
 "shadow": false,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "click": "this.shareTwitter(window.location.href)",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "data": {
  "name": "IconButton FB"
 },
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "maxHeight": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 58,
 "shadow": false,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "click": "this.shareFacebook(window.location.href)",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button house info"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "width": 120,
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "fontFamily": "Montserrat",
 "backgroundOpacity": 0,
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "verticalAlign": "middle",
 "iconWidth": 0,
 "gap": 5,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "fontWeight": "bold",
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "iconHeight": 0,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "label": "HOUSE INFO",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "shadowSpread": 1,
 "fontStyle": "normal",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button panorama list"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "width": 130,
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "fontFamily": "Montserrat",
 "backgroundOpacity": 0,
 "shadowBlurRadius": 15,
 "verticalAlign": "middle",
 "iconWidth": 32,
 "gap": 5,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "fontWeight": "bold",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "label": "PANORAMA LIST",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "shadowSpread": 1,
 "fontStyle": "normal",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button location"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "width": 90,
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "fontFamily": "Montserrat",
 "backgroundOpacity": 0,
 "shadowBlurRadius": 15,
 "verticalAlign": "middle",
 "iconWidth": 32,
 "gap": 5,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "fontWeight": "bold",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "label": "LOCATION",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "shadowSpread": 1,
 "fontStyle": "normal",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button floorplan"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "width": 103,
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "fontFamily": "Montserrat",
 "backgroundOpacity": 0,
 "shadowBlurRadius": 15,
 "verticalAlign": "middle",
 "iconWidth": 32,
 "gap": 5,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "fontWeight": "bold",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "label": "FLOORPLAN",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "shadowSpread": 1,
 "fontStyle": "normal",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button photoalbum"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "width": 112,
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "fontFamily": "Montserrat",
 "backgroundOpacity": 0,
 "shadowBlurRadius": 15,
 "verticalAlign": "middle",
 "iconWidth": 32,
 "gap": 5,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "fontWeight": "bold",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "label": "PHOTOALBUM",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "shadowSpread": 1,
 "fontStyle": "normal",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button realtor"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "width": 90,
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "fontFamily": "Montserrat",
 "backgroundOpacity": 0,
 "shadowBlurRadius": 15,
 "verticalAlign": "middle",
 "iconWidth": 32,
 "gap": 5,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "fontWeight": "bold",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "height": 40,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "label": "REALTOR",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "shadowSpread": 1,
 "fontStyle": "normal",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": true
},
{
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "layout": "absolute",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "horizontalAlign": "center",
 "width": "85%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "layout": "vertical",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "horizontalAlign": "left",
 "width": "50%",
 "class": "Container",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "gap": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.51,
 "shadow": false,
 "height": "100%",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "propagateClick": false
},
{
 "data": {
  "name": "X"
 },
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "25%",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "verticalAlign": "middle",
 "minHeight": 50,
 "paddingLeft": 0,
 "height": "75%",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "-left"
 },
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "layout": "absolute",
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "horizontalAlign": "center",
 "width": "85%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "layout": "vertical",
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "horizontalAlign": "left",
 "width": "50%",
 "class": "Container",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "gap": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.51,
 "shadow": false,
 "height": "100%",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "propagateClick": false
},
{
 "data": {
  "name": "X"
 },
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "25%",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "verticalAlign": "middle",
 "minHeight": 50,
 "paddingLeft": 0,
 "height": "75%",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "layout": "absolute",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 140,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "itemVerticalAlign": "top",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemThumbnailScaleMode": "fit_outside",
 "width": "100%",
 "itemPaddingLeft": 3,
 "paddingBottom": 70,
 "verticalAlign": "middle",
 "itemThumbnailWidth": 220,
 "gap": 26,
 "itemMaxWidth": 1000,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingLeft": 70,
 "scrollBarWidth": 10,
 "itemPaddingRight": 3,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "selectedItemLabelFontColor": "#04A3E1",
 "itemPaddingTop": 3,
 "scrollBarOpacity": 0.5,
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadow": true,
 "itemThumbnailShadow": false,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "itemLabelFontColor": "#666666",
 "itemLabelGap": 7,
 "borderSize": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "selectedItemThumbnailShadow": true,
 "borderRadius": 5,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundColorRatios": [],
 "itemOpacity": 1,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "itemThumbnailBorderRadius": 0,
 "paddingRight": 70,
 "propagateClick": false,
 "itemMode": "normal",
 "itemLabelFontWeight": "normal",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemMinHeight": 50,
 "class": "ThumbnailGrid",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "backgroundOpacity": 0.05,
 "itemHorizontalAlign": "center",
 "itemMinWidth": 50,
 "selectedItemLabelFontWeight": "bold",
 "itemMaxHeight": 1000,
 "minHeight": 1,
 "itemWidth": 220,
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemPaddingBottom": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemBackgroundOpacity": 0,
 "shadow": false,
 "minWidth": 1,
 "itemLabelFontSize": 14,
 "itemHeight": 156,
 "itemLabelTextDecoration": "none",
 "paddingTop": 10,
 "itemLabelFontFamily": "Montserrat",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "scrollBarColor": "#04A3E1",
 "itemThumbnailHeight": 125,
 "itemLabelFontStyle": "normal",
 "itemBorderRadius": 0,
 "itemLabelHorizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "data": {
  "name": "ThumbnailList"
 }
},
{
 "data": {
  "name": "-left"
 },
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "layout": "absolute",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "horizontalAlign": "center",
 "width": "85%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "layout": "vertical",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "horizontalAlign": "left",
 "width": "15%",
 "class": "Container",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "gap": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 50,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.51,
 "shadow": false,
 "height": "100%",
 "minWidth": 400,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "propagateClick": false
},
{
 "data": {
  "name": "X"
 },
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "25%",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "verticalAlign": "middle",
 "minHeight": 50,
 "paddingLeft": 0,
 "height": "75%",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "layout": "absolute",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 140,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "id": "MapViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "width": "100%",
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowColor": "#333333",
 "progressRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingRight": 6,
 "progressOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadow": true,
 "playbackBarLeft": 0,
 "vrPointerSelectionTime": 2000,
 "height": "100%",
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundOpacity": 1,
 "firstTransitionDuration": 0,
 "borderSize": 0,
 "progressBottom": 2,
 "playbackBarProgressBorderColor": "#000000",
 "progressHeight": 6,
 "borderRadius": 0,
 "playbackBarBottom": 0,
 "playbackBarOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "playbackBarHeadHeight": 15,
 "toolTipFontSize": 12,
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBorderSize": 0,
 "class": "ViewerArea",
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "progressLeft": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "progressBorderRadius": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "toolTipShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "minHeight": 1,
 "playbackBarHeight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarBorderColor": "#FFFFFF",
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipShadowSpread": 0,
 "minWidth": 1,
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderSize": 6,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowBlurRadius": 3,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "layout": "absolute",
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 140,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "layout": "absolute",
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "layout": "absolute",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "layout": "absolute",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "horizontalAlign": "center",
 "width": "55%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "layout": "vertical",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "horizontalAlign": "left",
 "width": "45%",
 "class": "Container",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "gap": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 60,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.51,
 "shadow": false,
 "height": "100%",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 60,
 "propagateClick": false
},
{
 "data": {
  "name": "X"
 },
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "25%",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "verticalAlign": "middle",
 "minHeight": 50,
 "paddingLeft": 0,
 "height": "75%",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Image"
 },
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "class": "Image",
 "paddingBottom": 0,
 "width": "100%",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "height": "100%",
 "shadow": false,
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "horizontalAlign": "right",
 "width": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "layout": "vertical",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.79,
 "shadow": false,
 "height": "100%",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "horizontalAlign": "left",
 "width": 370,
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowColor": "#333333",
 "right": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingRight": 6,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontFamily": "Arial",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "progressRight": 0,
 "paddingLeft": 0,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadow": true,
 "playbackBarLeft": 0,
 "vrPointerSelectionTime": 2000,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundOpacity": 1,
 "firstTransitionDuration": 0,
 "borderSize": 0,
 "progressBottom": 2,
 "playbackBarProgressBorderColor": "#000000",
 "progressHeight": 6,
 "borderRadius": 0,
 "playbackBarBottom": 0,
 "playbackBarOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "playbackBarHeadHeight": 15,
 "toolTipFontSize": 12,
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBorderSize": 0,
 "class": "ViewerArea",
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "progressLeft": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "progressBorderRadius": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "toolTipShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "minHeight": 1,
 "playbackBarHeight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "top": 0,
 "bottom": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipShadowSpread": 0,
 "minWidth": 1,
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderSize": 6,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "toolTipShadowBlurRadius": 3,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "data": {
  "name": "Container arrows"
 },
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "layout": "horizontal",
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "horizontalAlign": "right",
 "width": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "layout": "vertical",
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.79,
 "shadow": false,
 "height": "100%",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "horizontalAlign": "left",
 "width": 370,
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "HTMLText54192"
 },
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "class": "HTMLText",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "IconButton X"
 },
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "horizontalAlign": "right",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "100%",
 "right": 20,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "verticalAlign": "top",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "height": "36.14%",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "WebFrame48191"
 },
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "class": "WebFrame",
 "paddingBottom": 0,
 "right": "0%",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollEnabled": true,
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "minWidth": 1,
 "insetBorder": false,
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "horizontalAlign": "right",
 "width": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "layout": "vertical",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.79,
 "shadow": false,
 "height": "100%",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "horizontalAlign": "left",
 "width": 370,
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "HTMLText54192"
 },
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "class": "HTMLText",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "IconButton X"
 },
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "horizontalAlign": "right",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "100%",
 "right": 20,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "verticalAlign": "top",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "height": "36.14%",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "HTMLText54192"
 },
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "class": "HTMLText",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "IconButton X"
 },
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "horizontalAlign": "right",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "100%",
 "right": 20,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "verticalAlign": "top",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "height": "36.14%",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "playbackBarBorderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "width": "100%",
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowColor": "#333333",
 "progressRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingRight": 6,
 "progressOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadow": true,
 "playbackBarLeft": 0,
 "vrPointerSelectionTime": 2000,
 "height": "100%",
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundOpacity": 1,
 "firstTransitionDuration": 0,
 "borderSize": 0,
 "progressBottom": 2,
 "playbackBarProgressBorderColor": "#000000",
 "progressHeight": 6,
 "borderRadius": 0,
 "playbackBarBottom": 0,
 "playbackBarOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "playbackBarHeadHeight": 15,
 "toolTipFontSize": 12,
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBorderSize": 0,
 "class": "ViewerArea",
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "progressLeft": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "progressBorderRadius": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "toolTipShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "minHeight": 1,
 "playbackBarHeight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "top": "0%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarBorderColor": "#FFFFFF",
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipShadowSpread": 0,
 "minWidth": 1,
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderSize": 6,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowBlurRadius": 3,
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
},
{
 "data": {
  "name": "IconButton <"
 },
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "horizontalAlign": "center",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "verticalAlign": "middle",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "IconButton >"
 },
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "14.22%",
 "right": 10,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "verticalAlign": "middle",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontWeight": "normal",
 "transitionDuration": 500,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarBorderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "width": "100%",
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowColor": "#333333",
 "progressRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingRight": 6,
 "progressOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadow": true,
 "playbackBarLeft": 0,
 "vrPointerSelectionTime": 2000,
 "height": "100%",
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundOpacity": 1,
 "firstTransitionDuration": 0,
 "borderSize": 0,
 "progressBottom": 2,
 "playbackBarProgressBorderColor": "#000000",
 "progressHeight": 6,
 "borderRadius": 0,
 "playbackBarBottom": 0,
 "playbackBarOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "playbackBarHeadHeight": 15,
 "toolTipFontSize": 12,
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBorderSize": 0,
 "class": "ViewerArea",
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "progressLeft": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "progressBorderRadius": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "toolTipShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "minHeight": 1,
 "playbackBarHeight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "top": "0%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarBorderColor": "#FFFFFF",
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipShadowSpread": 0,
 "minWidth": 1,
 "toolTipShadowOpacity": 1,
 "toolTipDisplayTime": 600,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderSize": 6,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowBlurRadius": 3,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "data": {
  "name": "IconButton <"
 },
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "horizontalAlign": "center",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "verticalAlign": "middle",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "IconButton >"
 },
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "14.22%",
 "right": 10,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "verticalAlign": "middle",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "IconButton X"
 },
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "horizontalAlign": "right",
 "transparencyActive": false,
 "maxHeight": 60,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "10%",
 "right": 20,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "verticalAlign": "top",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "height": "10%",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Image"
 },
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "class": "Image",
 "paddingBottom": 0,
 "width": "100%",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "backgroundOpacity": 0,
 "verticalAlign": "bottom",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "height": "100%",
 "shadow": false,
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "horizontalAlign": "right",
 "width": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "layout": "vertical",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.79,
 "shadow": false,
 "height": "100%",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "horizontalAlign": "left",
 "width": 370,
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 40,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "HTMLText"
 },
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "class": "HTMLText",
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.72vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.69vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.69vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.26vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.26vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.4vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.4vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.43vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingRight": 10,
 "propagateClick": false
},
{
 "data": {
  "name": "Button"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": "9%",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "horizontalAlign": "center",
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "width": "46%",
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0.7,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "iconWidth": 32,
 "gap": 5,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "minWidth": 1,
 "mode": "push",
 "fontSize": "3vh",
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "iconHeight": 32,
 "borderSize": 0,
 "borderRadius": 0,
 "label": "lorem ipsum",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "fontStyle": "normal",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "IconButton <"
 },
 "maxWidth": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "maxHeight": 150,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "12%",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "verticalAlign": "middle",
 "minHeight": 70,
 "paddingLeft": 0,
 "height": "8%",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "minWidth": 70,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "Container separator"
 },
 "layout": "absolute",
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "horizontalAlign": "left",
 "width": "80%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": "30%",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "IconButton >"
 },
 "maxWidth": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "maxHeight": 150,
 "class": "IconButton",
 "paddingBottom": 0,
 "width": "12%",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "verticalAlign": "middle",
 "minHeight": 70,
 "paddingLeft": 0,
 "height": "8%",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "minWidth": 70,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "HTMLText"
 },
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "class": "HTMLText",
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.72vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.69vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.69vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.26vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.26vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.4vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingRight": 10,
 "propagateClick": false
},
{
 "data": {
  "name": "Button"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "horizontalAlign": "center",
 "fontWeight": "normal",
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "width": "46%",
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0.7,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "iconWidth": 32,
 "gap": 5,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "minWidth": 1,
 "mode": "push",
 "fontSize": "3vh",
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "iconHeight": 32,
 "borderSize": 0,
 "borderRadius": 0,
 "label": "lorem ipsum",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "fontStyle": "normal",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "HTMLText"
 },
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "width": "100%",
 "class": "HTMLText",
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.72vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.69vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.89vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.26vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.26vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingRight": 10,
 "propagateClick": false
},
{
 "visible": false,
 "data": {
  "name": "Button"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "horizontalAlign": "center",
 "width": 207,
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "shadowColor": "#000000",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0.7,
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "iconWidth": 32,
 "gap": 5,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "fontWeight": "normal",
 "iconHeight": 32,
 "height": 59,
 "shadow": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "minWidth": 1,
 "mode": "push",
 "fontSize": 34,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "label": "lorem ipsum",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "fontStyle": "normal",
 "cursor": "hand",
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "HTMLText18899"
 },
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "minHeight": 1,
 "height": "45%",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.72vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.83vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false
},
{
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "layout": "horizontal",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "horizontalAlign": "left",
 "width": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "gap": 10,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "height": "80%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "propagateClick": false
},
{
 "paddingRight": 0,
 "data": {
  "name": "agent photo"
 },
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "maxHeight": 200,
 "class": "Image",
 "paddingBottom": 0,
 "width": "25%",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "height": "100%",
 "shadow": false,
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "horizontalAlign": "left",
 "propagateClick": false
},
{
 "data": {
  "name": "HTMLText19460"
 },
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "75%",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "minHeight": 1,
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarColor": "#04A3E1",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.26vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.06vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.89vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.89vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.89vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.89vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingRight": 10,
 "propagateClick": false
}],
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "minHeight": 20,
 "paddingLeft": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarMargin": 2,
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "height": "100%",
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingTop": 0,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scripts": {
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "unregisterKey": function(key){  delete window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "downloadEnabled": false,
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "propagateClick": true
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
