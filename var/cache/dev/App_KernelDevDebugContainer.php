<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerZ4N9pxU\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerZ4N9pxU/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerZ4N9pxU.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerZ4N9pxU\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerZ4N9pxU\App_KernelDevDebugContainer([
    'container.build_hash' => 'Z4N9pxU',
    'container.build_id' => '521547a9',
    'container.build_time' => 1654430722,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerZ4N9pxU');
