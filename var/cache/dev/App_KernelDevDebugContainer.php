<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerQ4xDlkt\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerQ4xDlkt/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerQ4xDlkt.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerQ4xDlkt\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerQ4xDlkt\App_KernelDevDebugContainer([
    'container.build_hash' => 'Q4xDlkt',
    'container.build_id' => '554d8644',
    'container.build_time' => 1654174363,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerQ4xDlkt');
