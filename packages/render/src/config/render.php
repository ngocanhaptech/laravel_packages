<?php
return [
    'dist' => '',
    'render_root' => 'http://local.bizflycloud.vn:8000/storage/',
    'render_views' => [
        "index" => "theme::index",
        "elements" => "theme::elements",
        "cloud-server/index" => "theme::pages.cloud-server",
        "cloud-server/bang-gia" => "theme::pages.cloud-server-pricing",
        "cdn/index" => "theme::pages.cloud-server-pricing",
        "ContactPage" => "contact::index"
    ]
];