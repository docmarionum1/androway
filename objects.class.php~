<?php
    /**
     * Andromeda's Way
     * 
     * LICENSE
     * 
     * This source file is subject to the X license that is bundled
     * with this package in the file LICENSE
     * 
     * @package     androway::core::objects
     * @copyright   Copyright (c) 2009, DaveC
     * @license     x   x
     */
    
    /**
     * The object storage and some basic object-manipulatio functions
     * 
     * @author      DaveC <admin@excurion.nl>
     * @version     0.1 2009-11-26
     */
    class objects
    {
        /**
         * The id of the object
         * @var int
         */
        public $ID;
        /**
         * The id of the parent-object
         * @var int
         */
        public $ParentID;
        /**
         * The type of the object
         * @var int
         */
        public $Type;
        /**
         * The children of this object, contains ['id'] of the object, and ['obj'] the object itself
         * @var array
         */
        public $Children;
        /**
         * The value of the object (like health, or amount of money)
         * @var double
         */
        public $Value;
        /**
         * The event that gets triggered on this object
         * @var int
         */
        public $Trigger;
        
        /**
         * Initialises the object to its starting data
         * 
         * @param   int     $ID        -   The object's ID
         * @param   int     $ParentID  -   The ID of the parent-object
         * @param   int     $Type      -   The type of object
         * @param   array   $Children  -   The children-objects
         * @param   double  $Value     -   The value this object has
         * @param   int     $Trigger   -   The event that gets triggered on this object
         * @return  int     $ID        -   Returns the object-id on success
         */
        public function objects($ID = 0, $ParentID = 0, $Type = 0, $Children = null, $Value = 0, $Trigger = 0)
        {
            $this->ID          = $ID;
            $this->ParentID    = $ParentID;
            $this->Type        = $Type;
            $this->Children    = $Children;
            $this->Value       = $Value;
            $this->Trigger     = $Trigger;
            
            return $this->ID;
        }
    }
?>
